import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug, getAdjacentProjects } from "@/lib/data";
import ProjectCaseStudyClient from "@/components/ProjectCaseStudyClient";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return {
      title: "Project Not Found | Itisha Naukudkar",
    };
  }

  return {
    title: `${project.title} — Case Study | Itisha Naukudkar`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} — Case Study | Itisha Naukudkar`,
      description: project.shortDescription,
      type: "article",
    },
  };
}

export default function ProjectPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <ProjectCaseStudyClient
      project={project}
      prevProject={prev}
      nextProject={next}
    />
  );
}
