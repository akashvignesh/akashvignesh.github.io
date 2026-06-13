// Base path for the deployed site. On GitHub Pages project sites the app is
// served from https://<user>.github.io/<repo>/, so assets must be prefixed.
// Set NEXT_PUBLIC_BASE_PATH at build time (the deploy workflow does this).
// Empty in local dev, so the site works at http://localhost:3000.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Prefix a public asset path (e.g. "/profile.jpg") with the base path.
export const asset = (path: string): string => `${BASE_PATH}${path}`;
