import Image from "next/image";
import { HardSkills } from "~/_components/molecules/hard-skills";

export default function Aboutme() {
  return (
    <section className="flex flex-1">
      <div className="flex flex-1 items-center justify-center">
        <HardSkills />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-5">
        <Image
          className="rounded-3xl"
          src={`/img/DenisTech.jpeg`}
          width={600}
          height={600}
          alt="foto de programadora"
        />
        <a
          className="rounded-lg bg-[#965eeb] px-10 py-3 text-3xl text-white transition hover:opacity-70"
          href={"/cv"}
        >
          My CV
        </a>
      </div>
    </section>
  );
}
