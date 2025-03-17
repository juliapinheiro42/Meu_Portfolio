import React from "react";

interface SkillListProps {
  skills: string[];
}

export function SkillList({ skills }: SkillListProps) {

  return (
    <ul className="mt-2 list-disc list-inside transition-colors duration-300">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
}