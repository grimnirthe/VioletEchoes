/** Hang it — Culture intake. Drive mailbox. Nothing auto-posts. */

export const hangMeta = {
  title: "Hang it",
  tagline: "Bring something that belongs on the wall.",
  lead: "Art. A street. A track. A practice. If it still sings, we’ll look at it.",
  review: "We review before anything hangs. Nothing posts itself.",
} as const;

/** Published Google Form URL. Empty = show the copy and wait for the mailbox. */
export const hangFormUrl = "";

export const hangWant = [
  "Work that feels like this city — grit, clean lines, Nordic warmth, violet as signal not wash",
  "Original files you made or have the right to share",
  "One piece at a time",
] as const;

export const hangDont = [
  "Random neon cities with no door",
  "Scrapes of other people’s work",
  "Anything that needs to go live the same hour it lands",
] as const;

export const hangCategories = [
  "Art",
  "Street / node",
  "Echo (music)",
  "Practice",
  "Other",
] as const;

export const hangFields = [
  { name: "Category", required: true },
  { name: "Image or file", required: true },
  { name: "Title", required: true },
  { name: "Note", required: false },
  { name: "Name or handle", required: false },
] as const;

export const hangConfirm =
  "Received. It landed in the pile. We’ll look when we can. Nothing hangs until someone hangs it.";

export const hangXPost = `Hang it.

If you made something for Violet Echoes — art, a street, a track — bring it here. We review. Nothing auto-posts.

May the Echoes Remember.`;
