import { useEffect, useLayoutEffect } from "react";

const isBrowser = typeof window !== "undefined";

const useIsoMorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

export default useIsoMorphicLayoutEffect;
