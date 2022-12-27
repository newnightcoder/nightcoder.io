import { useRouter } from "next/router";
import { HomeAnimation } from "../../animations";

const Project = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);

  return (
    <div
      style={{
        background: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        width: "100%",
        color: "white",
      }}
    >
      <HomeAnimation>Project:{slug}</HomeAnimation>
    </div>
  );
};

export default Project;
