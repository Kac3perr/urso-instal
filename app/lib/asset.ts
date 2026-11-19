
export function assetPath(path: string): string {
  const basePath =
    process.env.NODE_ENV === "production" ? "/urso-instal" : "";

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${basePath}${normalizedPath}`;
}
