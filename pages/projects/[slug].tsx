import { PortableText } from "@portabletext/react";
import { GetStaticProps, GetStaticPropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeAnimation } from "../../animations";
import { Badge } from "../../components";
import { createUrl, sanityClient } from "../../sanity";
import {
  AboutSpan,
  AboutTitle,
  BackLink,
  BadgeContainer,
  DescriptionContainer,
  ImgContainer,
  ProjectPage,
  Title,
  TitleContainer,
  UnderTitle,
} from "../../styles/slug";
import { IProject } from "../../types";

const Project = ({ project }: { project: IProject }) => {
  // const { palette } = project.image;

  return (
    <ProjectPage
    // bgColor={palette.lightVibrant.background}
    >
      <ImgContainer>
        <Image
          src={createUrl(project.image).url()}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="project thumbnail"
        />
      </ImgContainer>

      <TitleContainer>
        <HomeAnimation>
          <Title>{project.title}</Title>
        </HomeAnimation>
        <UnderTitle>{project.undertitle}</UnderTitle>
        <BadgeContainer>
          {project.stack.map((name, i) => (
            <Badge key={i + 1} height={23} name={name} />
          ))}
        </BadgeContainer>
      </TitleContainer>

      <AboutTitle>
        <AboutSpan>about</AboutSpan>
        <AboutSpan translateY={25}>this</AboutSpan>
        <AboutSpan translateY={50}>project</AboutSpan>
      </AboutTitle>
      <DescriptionContainer>
        <PortableText value={project.description} />
      </DescriptionContainer>
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

      <Link href="/projects" passHref legacyBehavior>
        <BackLink>
          <span style={{ fontSize: "1.25rem" }}>&lt;&nbsp;</span>
          <span style={{ fontWeight: "500", textTransform: "uppercase" }}>
            back
          </span>
        </BackLink>
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
