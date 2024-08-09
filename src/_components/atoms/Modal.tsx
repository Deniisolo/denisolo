import Image from "next/image";

export type Project = {
  id: number;
  title: string;
  label: string;
  imagen: string;
  description: string;
  technologies: string;
  demoLink: string;
  repoLink: string;
};

export function Modal({
  closeCallback,
  project,
}: {
  closeCallback: () => void;
  project: Project | undefined;
}) {
  if (!project) return null;

  return (
    <div
      className="absolute left-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-black/50"
      onClick={closeCallback}
    >
      <div className="w-[500px] rounded-md bg-white p-10">
        <h2 className="text-center text-xl font-bold">{project.title}</h2>

        <Image
          key={project.id}
          src={project.imagen}
          alt={project.title}
          className="mx-auto"
          width={300}
          height={300}
        />

        <p className="my-2">{project.description}</p>

        <p className="my-2">{project.technologies}</p>

        <div className="mt-8 flex w-full items-center justify-center gap-4">
          <a
            href={project.demoLink}
            className="rounded-md bg-[#bb99f2] px-4 py-2 text-white transition hover:bg-[#c0bbff]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
          <a
            href={project.repoLink}
            className="rounded-md bg-[#bb99f2] px-4 py-2 text-white transition hover:bg-[#c0bbff]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository
          </a>
        </div>
      </div>
    </div>
  );
}
