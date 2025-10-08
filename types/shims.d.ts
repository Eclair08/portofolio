// Root-level shims to ensure TypeScript recognizes JS-only packages and custom
// JSX elements used by react-three-fiber components.

declare module 'three' {
  const THREE: any;
  export as namespace THREE;
  export = THREE;
}

declare module 'meshline' {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

// Minimal declarations for @react-three/fiber to expose the common exports used
// in the project. Installing the library's proper types is recommended, but this
// keeps the compiler happy for now.
declare module '@react-three/fiber' {
  import * as React from 'react';
  export const Canvas: any;
  export const extend: any;
  export function useFrame(cb: (...args: any[]) => any): void;
  export type RenderProps = any;
  export = {} as any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}

declare module '@react-three/fiber' {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}

