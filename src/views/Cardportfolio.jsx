import React from "react";
import "./Cardportfolio.css";
import { Contactinformation } from "../components/atoms/Contactinformation";
import { Label } from "../components/atoms/Label";
import { DemoButon } from "../components/atoms/DemoButon";
import { TitlePortfolio } from "../components/atoms/TitlePortfolio";
import { RepositoryButon } from "../components/atoms/RepositoryButon";
import { PhotoPortfolio } from "../components/atoms/PhotoPortfolio";

export function Cardportfolio({ project, onClose }) {
  return (
    <div>
      <button className="closeModal" onClick={onClose}>
        X
      </button>
      <PhotoPortfolio />
      <TitlePortfolio title={project.title} />
      <Label text={project.label} />
      <Contactinformation ContactinformationParagraph={project.description} />
      <DemoButon demoLink={project.demoLink} />
      <RepositoryButon repoLink={project.repoLink} />
    </div>
  );
}
