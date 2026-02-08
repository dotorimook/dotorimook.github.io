export const generateExcerpt = (content: string, length: number = 200) => {
  // Remove markdown headings
  let plainText = content.replace(/^#{1,6}\s+.+$/gm, '');
  // Remove markdown links
  plainText = plainText.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  // Remove markdown images
  plainText = plainText.replace(/!\[([^\]]*)\]\([^)]+\)/g, '');
  // Remove markdown bold/italic
  plainText = plainText.replace(/(\*\*|__)(.*?)\1/g, '$2');
  plainText = plainText.replace(/(\*|_)(.*?)\1/g, '$2');
  // Remove code blocks
  plainText = plainText.replace(/```[\s\S]*?```/g, '');
  plainText = plainText.replace(/`([^`]+)`/g, '$1');
  // Remove HTML tags
  plainText = plainText.replace(/<[^>]+>/g, '');
  // Replace multiple newlines/spaces with single space
  plainText = plainText.replace(/\s+/g, ' ').trim();

  if (plainText.length <= length) return plainText;
  return plainText.slice(0, length) + '...';
};
