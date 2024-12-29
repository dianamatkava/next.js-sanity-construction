export function truncateSanityTextBlock(content, wordsTruncate=10) {
  if (!Array.isArray(content) || content.length === 0) {
    return ""; // Return an empty string if content is invalid
  }

  const truncated = { ...content[0] }; // Clone the first block to avoid mutating the original content
  if (truncated.children && truncated.children.length > 0) {
    const firstChild = { ...truncated.children[0] }; // Clone the first child
    const words = firstChild.text.split(" "); // Split the text into words
    firstChild.text = words.slice(0, wordsTruncate).join(" ") + (words.length > wordsTruncate ? "..." : ""); // Keep only the first 15 words
    truncated.children = [firstChild]; // Keep only the truncated first child
  }

  return truncated.children[0]?.text || ""; // Return the truncated text
}