import { GetStaticProps, GetStaticPropsContext } from "next";
import { IProject } from ".";
import { HomeAnimation } from "../../animations";
import { sanityClient } from "../../sanity";

const Project = ({ project }) => {
  console.log(project);

  return (
    <div
      style={{
        background: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        width: "100%",
        color: "white",
      }}
    >
      <HomeAnimation>Project:{project.title}</HomeAnimation>
      <span>{project.undertitle}</span>
    </div>
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

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
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
