import Image from "next/image";

export function ProjectCard({
  hero,
  technologies,
  contents,
  color,
}: {
  hero: JSX.Element;
  technologies: {
    react: boolean;
    typescript: boolean;
    css: boolean;
    html: boolean;
    git: boolean;
    figma: boolean;
    javascript: boolean;
  };
  contents: JSX.Element;
  color: string;
}) {
  return (
    <div className="flex h-[500px] max-w-80 cursor-pointer flex-col overflow-hidden rounded-md shadow-md transition hover:scale-105 hover:shadow-xl">
      <div className="h-52 p-4 text-center" style={{ backgroundColor: color }}>
        {hero}
      </div>

      <div className="flex-1 p-4">{contents}</div>

      <div className="flex items-center justify-center gap-2 p-4 opacity-30">
        {technologies.react && (
          <Image width={25} height={25} src="./img/react.svg" alt="React" />
        )}
        {technologies.javascript && (
          <Image
            width={25}
            height={25}
            src="./img/javascript.svg"
            alt="JavaScript"
          />
        )}
        {technologies.typescript && (
          <Image
            width={25}
            height={25}
            src="./img/typescript.svg"
            alt="TypeScript"
          />
        )}
        {technologies.css && (
          <Image width={25} height={25} src="./img/css3.svg" alt="CSS" />
        )}
        {technologies.html && (
          <Image width={25} height={25} src="./img/html5.svg" alt="HTML" />
        )}
        {technologies.git && (
          <Image width={25} height={25} src="./img/git.svg" alt="Git" />
        )}
        {technologies.figma && (
          <Image width={25} height={25} src="./img/figma.svg" alt="Figma" />
        )}
      </div>
    </div>
  );
}
