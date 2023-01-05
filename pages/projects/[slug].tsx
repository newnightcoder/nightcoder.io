import { GetStaticProps, GetStaticPropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
import { IProject } from ".";
import { HomeAnimation } from "../../animations";
import { createUrl, sanityClient } from "../../sanity";
import { ProjectPage } from "../../styles/projects";

const Project = ({ project }: { project: IProject }) => {
  console.log(project);

  return (
    <ProjectPage>
      <HomeAnimation>Project:{project.title}</HomeAnimation>
      <span>{project.undertitle}</span>

      <div
        style={{
          height: "500px",
          width: "80vw",
          position: "relative",
          border: "2px solid white",
        }}
      >
        <Image
          src={createUrl(project.image).url()}
          layout="fill"
          alt="project thumbnail"
          quality={100}
          objectFit="contain"
        />
      </div>
      <Link href="/projects" legacyBehavior>
        back
      </Link>
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
  const projectQuery = `*[_type=="project" && slug.current==$slug][0]`;

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
