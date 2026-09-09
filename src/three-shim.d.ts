declare module "three";
declare module "three/addons/controls/OrbitControls.js" {
  export class OrbitControls {
    constructor(object: unknown, domElement?: HTMLElement);
    enableDamping: boolean;
    dampingFactor: number;
    enablePan: boolean;
    minDistance: number;
    maxDistance: number;
    minPolarAngle: number;
    maxPolarAngle: number;
    autoRotate: boolean;
    autoRotateSpeed: number;
    target: { copy(v: unknown): void };
    update(): boolean;
    dispose(): void;
    addEventListener(type: string, listener: () => void): void;
  }
}
