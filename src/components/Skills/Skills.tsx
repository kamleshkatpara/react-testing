import { SkillProps } from "./Skills.types";

export default function Skills({ skills }: SkillProps) {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}
