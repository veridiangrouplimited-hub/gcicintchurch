import type { PortableTextBlock } from "sanity";

/** Flattens portable text blocks to a plain-text string (e.g. for .ics DESCRIPTION or meta descriptions). */
export function portableTextToPlainText(blocks: PortableTextBlock[] | null | undefined): string {
  if (!blocks) return "";
  return blocks
    .map((block) =>
      "children" in block && Array.isArray(block.children)
        ? block.children.map((child) => ("text" in child ? child.text : "")).join("")
        : ""
    )
    .join("\n\n");
}
