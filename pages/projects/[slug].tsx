import { GetStaticProps, GetStaticPropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeAnimation } from "../../animations";
import { createUrl, sanityClient } from "../../sanity";
import { ProjectPage } from "../../styles/projects";
import { IProject } from "../../types";

const Project = ({ project }: { project: IProject }) => {
  console.log(project.image);
  const { palette } = project.image;
  return (
    <ProjectPage
    // bgColor={palette.lightVibrant.background}
    >
      <div
        style={{
          height: "33vmax",
          width: "100%",
          position: "relative",
          border: "2px solid white",
          gridColumn: "span 2",
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
          padding: "2vh 2vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          border: "1px solid red",
        }}
      >
        <HomeAnimation>
          <span
            style={{ fontSize: "5rem", letterSpacing: "-2px", width: "100%" }}
          >
            {project.title}
          </span>
        </HomeAnimation>
        <span>{project.undertitle}</span>
      </div>

      <div style={{ border: "1px solid black", width: "100%" }}>
        about this project
      </div>
      <div
        style={{
          border: "1px solid black",
          height: "300px",
          gridColumn: "span 2",
        }}
      >
        description
      </div>
      <div
        style={{
          border: "1px solid black",
          height: "300px",
          gridColumn: "span 2",
        }}
      >
        somethhin else
      </div>
      <div style={{ border: "1px solid black" }}>ok ok</div>

      <div
        style={{
          position: "absolute",
          top: "calc(var(--navbar-height) + 15px)",
          left: "15px",
          height: "30px",
          border: "1px solid black",
          padding: "0 5px",
        }}
      >
        <Link href="/projects" legacyBehavior>
          back
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
