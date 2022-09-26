import { useRouter } from "next/router";

export const useHandleRoute = () => {
  const router = useRouter();
  const { pathname } = router;

  const handleRoute = (path: string) => {
    pathname === path
      ? undefined
      : path === "/home"
      ? router.push("/")
      : router.push(path);
  };

  return handleRoute;
};
