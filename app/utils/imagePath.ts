export function getImagePath(src: string): string {
  // If the src already includes the base path or is an external URL, return as is
  if (src.startsWith('http') || src.startsWith('//') || src.includes('/rohnert-park-transmission')) {
    return src;
  }
  
  // Check if we need the base path
  const needsBasePath = 
    // Server-side: check NODE_ENV
    (typeof window === 'undefined' && process.env.NODE_ENV === 'production') ||
    // Client-side: check if we're on GitHub Pages
    (typeof window !== 'undefined' && window.location.hostname.includes('github.io'));
  
  // Only add base path if needed
  const basePath = needsBasePath ? '/rohnert-park-transmission' : '';
  
  // For relative paths starting with /, prepend the base path
  if (src.startsWith('/')) {
    return `${basePath}${src}`;
  }
  
  // For other paths, return as is
  return src;
}