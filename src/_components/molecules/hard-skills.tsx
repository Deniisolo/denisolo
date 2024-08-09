import { Hardskillspurple } from "../atoms/Hardskillspurple";
import { Hardskillsgrey } from "../atoms/Hardskillsgrey";
import { Label } from "../atoms/Label";

const hardSkillsInfo = [
  {
    label: "React",
    color: "#c0bbff",
  },
  {
    label: "JavaScript",
    color: "#d9d9d9",
  },
  {
    label: "TypeScript",
    color: "#c0bbff",
  },
  {
    label: "HTML",
    color: "#d9d9d9",
  },
  {
    label: "CSS",
    color: "#c0bbff",
  },
  {
    label: "Git",
    color: "#d9d9d9",
  },
  {
    label: "GitHub",
    color: "#c0bbff",
  },
  {
    label: "Responsive Design",
    color: "#d9d9d9",
  },
  {
    label: "Unit Testing",
    color: "#c0bbff",
  },
];

export function HardSkills() {
  return (
    <div className="flex max-w-[500px] flex-col gap-32 text-center">
      <h2 className="text-3xl font-light">
        👩🏻‍💻Front-end developer with skills in:
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {hardSkillsInfo.map((hardSkill) => (
          <span
            style={{ background: hardSkill.color }}
            className="rounded-md p-2 text-xl"
            key={hardSkill.label}
          >
            {hardSkill.label}
          </span>
        ))}
      </div>
    </div>
  );
}
