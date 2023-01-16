import { useRouter } from "next/router";

const useHandleRoute = () => {
  const router = useRouter();
  const { pathname } = router;

  const handleRoute = (path: string) => {
    const isSamePage = pathname === path;
    const isHomePage = pathname === "/" && path === "/home";
    isSamePage || isHomePage
      ? undefined
      : path === "/home"
      ? router.push("/")
      : router.push(path);
  };

  return handleRoute;
};

export default useHandleRoute;
