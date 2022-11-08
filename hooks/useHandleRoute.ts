import { useRouter } from "next/router";

const useHandleRoute = () => {
  const router = useRouter();
  const { pathname } = router;

  const handleRoute = (path: string) => {
    const samePage = pathname === path;
    const samePageHome = pathname === "/" && path === "/home";
    samePage || samePageHome
      ? undefined
      : path === "/home"
      ? router.push("/")
      : router.push(path);
  };

  return handleRoute;
};

export default useHandleRoute;
