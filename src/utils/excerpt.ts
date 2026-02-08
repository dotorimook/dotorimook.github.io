export function getExcerpt(body: string, length: number = 200): string {
  let text = String(body).replace(/^---[\s\S]*?---/, '');
  text = text.replace(/#{1,6}\s+/g, '');
  text = text.replace(/!\[.*?\]\(.*?\)/g, '');
  text = text.replace(/\[(.*?)\]\(.*?\)/g, '$1');
  text = text.replace(/(\*\*|__)(.*?)\1/g, '$2');
  text = text.replace(/(\*|_)(.*?)\1/g, '$2');
  text = text.replace(/```[\s\S]*?```/g, '');
  text = text.replace(/`.*?`/g, '');
  text = text.replace(/>\s+/g, '');
  text = text.replace(/^\s*[-*+]\s+/gm, '');
  text = text.replace(/^\s*\d+\.\s+/gm, '');
  text = text.replace(/\s+/g, ' ').trim();
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}
