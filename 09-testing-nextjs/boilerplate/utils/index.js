export function cutTextToLength(str, maxLength) {
  return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
}

export function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

export function composeArticleSlug(id, title) {
  return `${slugify(title)}-${id}`;
}

export function extractArticleIdFromSlug(slug) {
  return slug.split('-').pop();
}
