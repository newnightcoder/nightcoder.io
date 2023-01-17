import { PortableText } from "@portabletext/react";
import { GetStaticProps, GetStaticPropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { HomeAnimation } from "../../animations";
import { Badge } from "../../components";
import { TransitionContext } from "../../context/TransitionContext";
import { createUrl, sanityClient } from "../../sanity";
import {
  AboutSpan,
  AboutTitle,
  AnimatedSpanNext,
  BackLink,
  BadgeContainer,
  DescriptionContainer,
  ImgContainer,
  NextContainer,
  NextImgContainer,
  NextTitle,
  ProjectPage,
  Title,
  TitleContainer,
  UnderTitle,
} from "../../styles/slug";
import { IProject } from "../../types";
import text from "../api/text.json";

const Project = ({ project }: { project: IProject }) => {
  const { lang } = useContext(TransitionContext);
  const [showNextImg, setShowNextImg] = useState(false);

  return (
    <ProjectPage
    // bgColor={palette.lightVibrant.background}
    >
      <Link href="/projects" passHref legacyBehavior>
        <BackLink>
          <span style={{ fontSize: "1.25rem" }}>&lt;&nbsp;</span>
          <span style={{ fontWeight: "500", textTransform: "uppercase" }}>
            {text[lang].navLinks.back}
          </span>
        </BackLink>
      </Link>
      <ImgContainer>
        <Image
          src={createUrl(project.image).url()}
          layout="fill"
          objectFit="contain"
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
            <Badge key={i + 1} name={name} size={20} style={"flat-square"} />
          ))}
        </BadgeContainer>
      </TitleContainer>

      <AboutTitle>
        <AboutSpan>{text[lang].projectAbout.about}</AboutSpan>
        <AboutSpan translateY={30}>{text[lang].projectAbout.this}</AboutSpan>
        <AboutSpan translateY={60}>{text[lang].projectAbout.project}</AboutSpan>
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
      {project.next ? (
        <NextContainer>
          <AnimatedSpanNext animation={"slide1"}>next project</AnimatedSpanNext>
          <AnimatedSpanNext animation={"slide2"}>next project</AnimatedSpanNext>
          <Link href={`${project.next?.slug.current}`} passHref legacyBehavior>
            <NextTitle
              showNextImg={showNextImg}
              onMouseOver={() => setShowNextImg(true)}
              onMouseOut={() => setShowNextImg(false)}
            >
              {project.next?.title}
            </NextTitle>
          </Link>
          <NextImgContainer showNextImg={showNextImg}>
            <Image
              src={createUrl(project.next?.image).url()}
              layout={"fill"}
              objectFit="cover"
            />
          </NextImgContainer>
        </NextContainer>
      ) : null}
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
      id: project.projectId,
    },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { params, locale } = context;

  const projectQuery = `*[_type=="project" && slug.current==$slug][0]{
    ...,
    projectId,
    image{
      ...,
      "palette": asset -> metadata.palette
    },
    "description":description.${locale},
    "undertitle":undertitle.${locale},
    "next":*[_type=="project" && projectId==^.projectId-1][0]{
      title,
      slug{
        current
      },
      image
    },
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
