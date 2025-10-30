declare module "gsap" {
  export interface GSAP {
    registerPlugin: (...plugins: unknown[]) => void;
  }
  export const gsap: GSAP;
  const gsapDefault: GSAP;
  export default gsapDefault;
}

declare module "gsap/ScrollTrigger" {
  export interface ScrollTriggerStatic {
    create: (vars: unknown) => { kill: () => void };
  }
  export const ScrollTrigger: ScrollTriggerStatic;
}

declare module "gsap/dist/ScrollTrigger" {
  export { ScrollTrigger } from "gsap/ScrollTrigger";
}


