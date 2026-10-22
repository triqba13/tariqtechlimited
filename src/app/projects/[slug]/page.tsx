import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { PROJECTS } from '@/lib/projectsData';
import ProjectDetailClient from './ProjectDetailClient';

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

async function ProjectContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#dfeff2] dark:bg-[#0A0D14]" />}>
      <ProjectContent params={params} />
    </Suspense>
  );
}
