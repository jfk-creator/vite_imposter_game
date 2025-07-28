// For CSS modules (if you use them, otherwise omit)
declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// For plain CSS imports
declare module "*.css" {
  const css: string; // Or just 'any;'
  export default css;
}

// If you also import other asset types like .svg, .png etc.
declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}
