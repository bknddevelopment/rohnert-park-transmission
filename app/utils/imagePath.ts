export function getImagePath(src: string): string {
  // In production with GitHub Pages, we need to prefix with the base path
  const basePath = process.env.NODE_ENV === 'production' ? '/rohnert-park-transmission' : '';
  
  // If the src already includes the base path or is an external URL, return as is
  if (src.startsWith('http') || src.startsWith('//') || src.includes('/rohnert-park-transmission')) {
    return src;
  }
  
  // For relative paths starting with /, prepend the base path
  if (src.startsWith('/')) {
    return `${basePath}${src}`;
  }
  
  // For other paths, return as is
  return src;
}