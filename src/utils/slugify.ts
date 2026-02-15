export const slugify = (text: string) => {
  return text
    .toString()
    .replace(/\s+/g, '-')
    .replace(/[^a-zA-Z0-9\-\uAC00-\uD7A3\u3130-\u318F]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};
