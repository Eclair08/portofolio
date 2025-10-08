export { };

declare module '*.glb';
declare module '*.png';

declare module 'meshline' {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

// Shim for three when type definitions cannot be resolved by the compiler.
// Installing `@types/three` is preferred, but this prevents the TS7016 error
// while developing locally.
declare module 'three' {
  const THREE: any;
  export as namespace THREE;
  export = THREE;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}

// Also augment the @react-three/fiber module's JSX namespace so custom three-fiber
// elements are recognized when the library provides its own JSX typings.
declare module '@react-three/fiber' {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}
