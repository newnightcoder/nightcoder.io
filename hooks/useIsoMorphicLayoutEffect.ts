import { useEffect, useLayoutEffect } from "react";

const isBrowser = typeof window !== "undefined";

export const useIsoMorphicLayoutEffect = isBrowser
  ? useLayoutEffect
  : useEffect;
