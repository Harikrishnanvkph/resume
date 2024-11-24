import { useState } from "react";

const skills = [
  "MERN Stack Development",
  "SCCM",
  "Java",
  "Node JS",
  "React JS",
  "Kotlin",
  "MongoDB",
  "Express JS",
  "JavaScript",
  "HTML",
  "CSS",
  "MS Office 365",
  "Bootstrap",
  "Python",
  "Intune",
  "Microsoft Endpoint Management",
];

const skillsWWE = [
  "MERN Stack Development",
  "SCCM",
  "Node JS",
  "React JS",
  "MongoDB",
  "Express JS",
  "JavaScript",
  "HTML",
  "CSS",
  "MS Office 365",
  "Bootstrap",
  "Intune",
];

export function Home_Skill() {
  const [radio, setRadio] = useState("allSkill");

  const getSkills = () => {
    return radio === "allSkill" ? skills : skillsWWE;
  };

  return (
    <>
      <div className="home-skills mt-3">
        <div className="skill-choose-radio p-sm-3 p-2 text-end d-flex align-items-center justify-content-center flex-sm-row flex-column">
          <div className="d-flex align-items-center my-sm-0 my-1">
            <label htmlFor="allSkill" className="mx-3 fw-semibold">
              All Skills
            </label>
            <input
              type="radio"
              id="allSkill"
              name="skill"
              onChange={() => setRadio("allSkill")}
              checked={radio === "allSkill"}
            />
          </div>
          <div className="d-flex align-items-center my-sm-0 my-1">
            <label htmlFor="workSkill" className="mx-3 fw-semibold">
              Skills With Work Experience
            </label>
            <input
              type="radio"
              id="workSkill"
              name="skill"
              onChange={() => setRadio("workSkill")}
              checked={radio === "workSkill"}
            />
          </div>
        </div>
        <div className="skill-tile d-flex mt-3">
          {getSkills().map((it, index) => (
            <div key={index} className="skills fw-semibold px-3 py-2">
              {it}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
