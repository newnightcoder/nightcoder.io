import { PortableText } from "@portabletext/react";
import { GetStaticProps, GetStaticPropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeAnimation } from "../../animations";
import { createUrl, sanityClient } from "../../sanity";
import { ProjectPage } from "../../styles/projects";
import { IProject } from "../../types";

const Project = ({ project }: { project: IProject }) => {
  console.log(project.description);
  const { palette } = project.image;

  const Title = () => {
    return <h1></h1>;
  };

  const badgeColorDict = {
    react: "#61DAFB",
    redux: "#764ABC",
    MUI: "#007FFF",
    styledcomponents: "#DB7093",
    firebase: "#FFCA28",
    javascript: "#F7DF1E",
    typescript: "#3178C6",
    html5: "#E34F26",
    sass: "#CC6699",
    stripe: "#008CDD",
  };

  const badgeColor = (str: string) => {
    let color: string;
    for (let key in badgeColorDict) {
      if (str === key) {
        console.log(Object.values(badgeColorDict)[key]);

        // color = Object.values(badgeColorDict)[key];
      }
    }
    console.log(color);
  };

  return (
    <ProjectPage
    // bgColor={palette.lightVibrant.background}
    >
      <div
        style={{
          gridArea: "img",
          height: "33vmax",
          width: "100%",
          position: "relative",
          // border: "2px solid white",
        }}
      >
        <Image
          src={createUrl(project.image).url()}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="project thumbnail"
        />
      </div>
      <div
        style={{
          gridArea: "title",
          padding: "2vh 2vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          // border: "1px solid red",
        }}
      >
        <HomeAnimation>
          <span
            style={{ fontSize: "5rem", letterSpacing: "-2px", width: "100%" }}
          >
            {project.title}
          </span>
        </HomeAnimation>
        <span style={{ textTransform: "uppercase", paddingLeft: "15px" }}>
          {project.undertitle}
        </span>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, 200px)",
            gridGap: "5px",
          }}
        >
          {project.stack.map((str, i) => (
            <img
              key={i + 1}
              src={`https://img.shields.io/badge/${str}-test-${badgeColor(
                str
              )}?style=for-the-badge&logo=${str}`}
              alt=""
            />
          ))}
        </div>
      </div>

      <div
        style={{
          gridArea: "about",
          width: "100%",
          height: "max-content",
          padding: "1.5vh 2vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          fontSize: "3.75rem",
          fontWeight: "800",
          textTransform: "uppercase",
          color: "rgba(0, 0, 0, 0.125)",
          // border: "1px solid black",
        }}
      >
        <span style={{ display: "block" }}>about</span>
        <span style={{ display: "block", transform: "translateY(-25px)" }}>
          this
        </span>
        <span style={{ display: "block", transform: "translateY(-50px)" }}>
          project
        </span>
      </div>
      <div
        style={{
          gridArea: "desc",
          height: "auto",
          padding: "1vh 1.5vw",
          fontSize: "1.25rem",
          // border: "1px solid black",
        }}
      >
        <PortableText value={project.description} />
      </div>
      <div
        style={{
          border: "1px solid black",
          height: "300px",
          gridArea: "som",
        }}
      >
        somethhin else
      </div>
      <div style={{ border: "1px solid black", gridArea: "ok" }}>ok ok</div>

      <div
        style={{
          position: "fixed",
          top: "calc(var(--navbar-height) + 15px)",
          right: "15px",
          height: "30px",
          padding: "0 20px",
          fontSize: ".75rem",
          border: "1px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "black",
          color: "white",
        }}
      >
        <Link href="/projects" legacyBehavior>
          back to projects
        </Link>
      </div>
    </ProjectPage>
  );
};

export const getStaticPaths = async () => {
  const slugQuery = `*[_type=="project"]{
    _id,
    slug{
      current
    }
  }`;
  const projectsWithSlug: IProject[] = await sanityClient.fetch(slugQuery);
  const paths = projectsWithSlug.map((project) => ({
    // map with parentheses : [].map() => () or with brackets + explicit return: [].map() => { return {}}
    params: {
      slug: project.slug.current,
    },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { params } = context;
  const projectQuery = `*[_type=="project" && slug.current==$slug][0]{
    ...,
    image{
      ...,
      "palette": asset -> metadata.palette
    }
  } 
  `;

  const project = await sanityClient.fetch(projectQuery, { slug: params.slug });

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};

export default Project;
