import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { mapPins, type MapPin } from "@/data/city-map";

export type DoorHandle = {
  dispose: () => void;
  reset: () => void;
  select: (id: string | null) => void;
};

export type DoorMountOpts = {
  onSelect?: (id: string | null) => void;
  onReady?: () => void;
  onFail?: (reason: string) => void;
  autoRotate?: boolean;
};

const MAP_SIZE = 14;
const MAP_SRC = "/images/map/city-interactive.jpg";

const COLORS: Record<string, number> = {
  eimyrja: 0x9b6dff,
  veilreach: 0x6ec8ff,
  "high-quiet": 0xe8d4a0,
  "green-spaces": 0x5dba7a,
  innovation: 0x7ec8d9,
  thornwall: 0xa0674b,
  "cultural-hub": 0xc45dff,
  "neon-core": 0xff4fc9,
  "ember-market": 0xe08a3c,
  harborward: 0x3d8a8a,
  "living-ships": 0x5aa7c4,
  "public-services": 0x6b7390,
  warrens: 0x8a6b7a,
  hearthrow: 0xd4b06a,
};

/** Same percent frame as the 2D interactive map. +x east, +z south (image down). */
function pinXZ(pin: MapPin) {
  return {
    x: (pin.x / 100 - 0.5) * MAP_SIZE,
    z: (pin.y / 100 - 0.5) * MAP_SIZE,
  };
}

function colorFor(id: string) {
  return COLORS[id] ?? 0x9b6dff;
}

export function mountIslandDoor(
  canvas: HTMLCanvasElement,
  opts: DoorMountOpts = {},
): DoorHandle {
  const gl =
    canvas.getContext("webgl2") || canvas.getContext("webgl");
  if (!gl) {
    opts.onFail?.("WebGL not available");
    return {
      dispose() {},
      reset() {},
      select() {},
    };
  }

  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
    powerPreference: "high-performance",
  });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.setClearColor(0x07060a, 1);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x07060a, 14, 42);
  scene.background = new THREE.Color(0x07060a);

  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 80);
  const eim = pinXZ(mapPins.find((p) => p.id === "eimyrja") ?? mapPins[0]);
  const homePos = new THREE.Vector3(0.6, 9.8, 12.2);
  const homeTarget = new THREE.Vector3(eim.x, 0.35, eim.z);
  camera.position.copy(homePos);

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = !reduceMotion;
  controls.dampingFactor = 0.08;
  controls.enablePan = false;
  controls.minDistance = 6;
  controls.maxDistance = 22;
  controls.minPolarAngle = 0.35;
  controls.maxPolarAngle = Math.PI / 2 - 0.12;
  controls.autoRotate = !reduceMotion && (opts.autoRotate ?? true);
  controls.autoRotateSpeed = 0.45;
  controls.target.copy(homeTarget);
  controls.update();

  const disposables: THREE.Object3D[] = [];
  const geos: THREE.BufferGeometry[] = [];
  const mats: THREE.Material[] = [];
  const pickables: THREE.Object3D[] = [];
  const byId = new Map<string, THREE.Object3D[]>();

  function track<T extends THREE.Object3D>(obj: T, id?: string): T {
    disposables.push(obj);
    scene.add(obj);
    if (id) {
      const list = byId.get(id) ?? [];
      list.push(obj);
      byId.set(id, list);
      obj.userData.pinId = id;
      pickables.push(obj);
    }
    return obj;
  }

  function geo<T extends THREE.BufferGeometry>(g: T): T {
    geos.push(g);
    return g;
  }
  function mat<T extends THREE.Material>(m: T): T {
    mats.push(m);
    return m;
  }

  // Lights
  scene.add(new THREE.AmbientLight(0xb8a8d4, 0.45));
  const hemi = new THREE.HemisphereLight(0xc4a5ff, 0x1a1424, 0.7);
  scene.add(hemi);
  const key = new THREE.DirectionalLight(0xe8e0ff, 1.15);
  key.position.set(-4, 14, 8);
  scene.add(key);
  const coreLight = new THREE.PointLight(0x9b6dff, 2.4, 16, 1.6);
  coreLight.position.set(eim.x, 2.2, eim.z);
  scene.add(coreLight);
  const goldFill = new THREE.PointLight(0xd4b06a, 0.55, 12, 2);
  goldFill.position.set(eim.x + 3, 1.4, eim.z - 2);
  scene.add(goldFill);

  // Water under the atlas
  const water = track(
    new THREE.Mesh(
      geo(new THREE.CircleGeometry(18, 64)),
      mat(
        new THREE.MeshStandardMaterial({
          color: 0x0c1420,
          roughness: 0.22,
          metalness: 0.35,
          emissive: 0x123044,
          emissiveIntensity: 0.18,
        }),
      ),
    ),
  );
  water.rotation.x = -Math.PI / 2;
  water.position.y = -0.18;

  // The 2D atlas, same percent frame as the interactive map
  const mapMat = mat(
    new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.72,
      metalness: 0.04,
    }),
  );
  const mapMesh = track(
    new THREE.Mesh(geo(new THREE.PlaneGeometry(MAP_SIZE, MAP_SIZE)), mapMat),
  );
  mapMesh.rotation.x = -Math.PI / 2;
  mapMesh.position.y = 0.12;
  mapMesh.userData.ground = true;

  const loader = new THREE.TextureLoader();
  const mapTex = loader.load(MAP_SRC);
  mapTex.colorSpace = THREE.SRGBColorSpace;
  mapTex.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy?.() || 1);
  mapMat.map = mapTex;
  mapMat.needsUpdate = true;

  // Markers sit on the same percent coords as the 2D pins
  for (const pin of mapPins) {
    if (pin.id === "eimyrja") continue;
    const { x, z } = pinXZ(pin);
    const col = colorFor(pin.id);
    const h = pin.layer === "water" ? 0.55 : 0.95;
    const group = new THREE.Group();
    group.position.set(x, 0.12, z);
    group.userData.pinId = pin.id;

    const stem = new THREE.Mesh(
      geo(new THREE.CylinderGeometry(0.045, 0.06, h, 8)),
      mat(
        new THREE.MeshStandardMaterial({
          color: col,
          emissive: col,
          emissiveIntensity: 0.28,
          roughness: 0.4,
          metalness: 0.25,
        }),
      ),
    );
    stem.position.y = h / 2;
    stem.userData.pinId = pin.id;
    group.add(stem);

    const head = new THREE.Mesh(
      geo(new THREE.SphereGeometry(0.16, 14, 12)),
      mat(
        new THREE.MeshStandardMaterial({
          color: col,
          emissive: col,
          emissiveIntensity: 0.55,
          roughness: 0.28,
          metalness: 0.2,
        }),
      ),
    );
    head.position.y = h + 0.12;
    head.userData.pinId = pin.id;
    group.add(head);

    track(group, pin.id);
  }

  // Eimyrja core — on her pin, not the geometric origin
  const coreMat = mat(
    new THREE.MeshStandardMaterial({
      color: 0x9b6dff,
      roughness: 0.18,
      metalness: 0.45,
      emissive: 0x9b6dff,
      emissiveIntensity: 0.7,
    }),
  );
  const core = track(
    new THREE.Mesh(geo(new THREE.OctahedronGeometry(0.62, 0)), coreMat),
    "eimyrja",
  );
  core.position.set(eim.x, 1.2, eim.z);
  const inner = track(
    new THREE.Mesh(
      geo(new THREE.OctahedronGeometry(0.32, 0)),
      mat(
        new THREE.MeshStandardMaterial({
          color: 0xf2eef8,
          emissive: 0xc4a5ff,
          emissiveIntensity: 1.1,
          roughness: 0.12,
          metalness: 0.2,
        }),
      ),
    ),
    "eimyrja",
  );
  inner.position.set(eim.x, 1.2, eim.z);

  const ring1 = track(
    new THREE.Mesh(
      geo(new THREE.TorusGeometry(1.0, 0.03, 10, 48)),
      mat(
        new THREE.MeshStandardMaterial({
          color: 0xd4b06a,
          emissive: 0xd4b06a,
          emissiveIntensity: 0.45,
          metalness: 0.7,
          roughness: 0.25,
        }),
      ),
    ),
  );
  ring1.rotation.x = Math.PI / 2;
  ring1.position.set(eim.x, 1.05, eim.z);
  const ring2 = ring1.clone();
  scene.add(ring2);
  ring2.rotation.x = Math.PI / 2.4;
  ring2.position.set(eim.x, 1.4, eim.z);
  disposables.push(ring2);

  // Living ship sits on its water pin
  const shipPin = mapPins.find((p) => p.id === "living-ships");
  if (shipPin) {
    const { x, z } = pinXZ(shipPin);
    const hull = track(
      new THREE.Mesh(
        geo(new THREE.CapsuleGeometry(0.18, 1.35, 6, 12)),
        mat(
          new THREE.MeshStandardMaterial({
            color: 0x5aa7c4,
            emissive: 0x2a6a88,
            emissiveIntensity: 0.3,
            roughness: 0.35,
            metalness: 0.4,
          }),
        ),
      ),
      "living-ships",
    );
    hull.rotation.z = Math.PI / 2;
    hull.position.set(x, 0.32, z);
  }

  // Rain
  let rain: THREE.Points | null = null;
  let rainVel: Float32Array | null = null;
  if (!reduceMotion) {
    const count = 700;
    const positions = new Float32Array(count * 3);
    rainVel = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 1] = Math.random() * 14;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 22;
      rainVel[i] = 2.2 + Math.random() * 2.4;
    }
    const rg = geo(new THREE.BufferGeometry());
    rg.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    rain = new THREE.Points(
      rg,
      mat(
        new THREE.PointsMaterial({
          color: 0x6ec8ff,
          size: 0.045,
          transparent: true,
          opacity: 0.45,
          depthWrite: false,
        }),
      ),
    );
    scene.add(rain);
    disposables.push(rain);
  }

  let selected: string | null = null;
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  let moved = false;
  let raf = 0;
  let running = true;
  const clock = new THREE.Clock();
  let lastT = 0;

  function applySelect(id: string | null) {
    selected = id;
    byId.forEach((objs, key) => {
      const on = key === id;
      for (const o of objs) {
        o.traverse((child: { material?: { emissiveIntensity?: number } }) => {
          const m = child.material;
          if (m && "emissiveIntensity" in m && typeof m.emissiveIntensity === "number") {
            m.emissiveIntensity = on ? 0.72 : key === "eimyrja" ? 0.7 : 0.18;
          }
        });
        o.scale.setScalar(on ? 1.08 : 1);
      }
    });
    opts.onSelect?.(id);
  }

  function pick(clientX: number, clientY: number) {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects([...pickables, mapMesh], true);
    const hit = hits[0];
    if (!hit) {
      applySelect(null);
      return;
    }
    let id: string | null = null;
    let obj: THREE.Object3D | null = hit.object;
    while (obj) {
      if (typeof obj.userData.pinId === "string") {
        id = obj.userData.pinId;
        break;
      }
      obj = obj.parent;
    }
    if (!id) {
      const p = hit.point;
      let best = Infinity;
      for (const pin of mapPins) {
        const { x, z } = pinXZ(pin);
        const d = (p.x - x) ** 2 + (p.z - z) ** 2;
        if (d < best) {
          best = d;
          id = pin.id;
        }
      }
    }
    applySelect(id);
  }

  function onPointerDown() {
    moved = false;
    controls.autoRotate = false;
  }
  function onControlsChange() {
    moved = true;
  }
  function onPointerUp(e: PointerEvent) {
    if (!moved) pick(e.clientX, e.clientY);
  }
  function onKey(e: KeyboardEvent) {
    if (e.key === "r" || e.key === "R") reset();
    if (e.key === "Escape") applySelect(null);
    if (e.key === "ArrowLeft") {
      controls.autoRotate = false;
      camera.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.12);
      controls.update();
    }
    if (e.key === "ArrowRight") {
      controls.autoRotate = false;
      camera.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), -0.12);
      controls.update();
    }
  }

  canvas.style.touchAction = "none";
  canvas.addEventListener("pointerdown", onPointerDown);
  canvas.addEventListener("pointerup", onPointerUp);
  controls.addEventListener("change", onControlsChange);
  window.addEventListener("keydown", onKey);

  function resize() {
    const parent = canvas.parentElement;
    const w = parent?.clientWidth || canvas.clientWidth || 640;
    const h = parent?.clientHeight || canvas.clientHeight || 360;
    const width = Math.max(1, Math.floor(w));
    const height = Math.max(1, Math.floor(h));
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  const ro = new ResizeObserver(resize);
  if (canvas.parentElement) ro.observe(canvas.parentElement);
  resize();

  function reset() {
    camera.position.copy(homePos);
    controls.target.copy(homeTarget);
    controls.autoRotate = !reduceMotion && (opts.autoRotate ?? true);
    applySelect(null);
    controls.update();
  }

  function tick() {
    if (!running) return;
    raf = requestAnimationFrame(tick);
    const t = clock.getElapsedTime();
    const dt = Math.min(Math.max(t - lastT, 0), 0.05);
    lastT = t;

    if (!reduceMotion) {
      core.rotation.y = t * 0.35;
      inner.rotation.y = -t * 0.5;
      ring1.rotation.z = t * 0.4;
      ring2.rotation.z = -t * 0.28;
      const pulse = 0.55 + 0.35 * (0.5 + 0.5 * Math.sin(t * 2.15));
      coreMat.emissiveIntensity = pulse;
      coreLight.intensity = 1.6 + pulse * 1.4;
    }

    if (rain && rainVel) {
      const pos = rain.geometry.getAttribute("position") as THREE.BufferAttribute;
      const arr = pos.array as Float32Array;
      for (let i = 0; i < rainVel.length; i++) {
        arr[i * 3 + 1] -= rainVel[i] * dt;
        if (arr[i * 3 + 1] < -0.2) {
          arr[i * 3 + 1] = 12 + Math.random() * 3;
          arr[i * 3] = (Math.random() - 0.5) * 22;
          arr[i * 3 + 2] = (Math.random() - 0.5) * 22;
        }
      }
      pos.needsUpdate = true;
    }

    controls.update();
    renderer.render(scene, camera);
  }

  function onContextLost(e: Event) {
    e.preventDefault();
    running = false;
    opts.onFail?.("WebGL context lost");
  }
  canvas.addEventListener("webglcontextlost", onContextLost, false);

  tick();
  opts.onReady?.();

  return {
    dispose() {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      window.removeEventListener("keydown", onKey);
      controls.dispose();
      mapTex.dispose();
      geos.forEach((g) => g.dispose());
      mats.forEach((m) => m.dispose());
      renderer.dispose();
    },
    reset,
    select: applySelect,
  };
}
