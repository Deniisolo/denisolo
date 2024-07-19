import React from "react";
import "./Modal.css";
import { Contactinformation } from "./Contactinformation";
import { Label } from "./Label";
import { DemoButon } from "./DemoButon";
import { TitlePortfolio } from "./TitlePortfolio";
import { RepositoryButon } from "./RepositoryButon";
import { PhotoPortfolio } from "./PhotoPortfolio";

export function Modal({ isOpen, onClose, projects }) {
  if (!isOpen) {
    return null;
  }
  const project = [
    {
      id: 1,
      title: "Movie-Challenge",
      label: "Movie-Challenge",
      imagen: "./public/img/Moviechallenge.png",
      description:
        "Movie Challenge is a platform for browsing, filtering and sorting movies with data from The Movie Database API V3. It offers an intuitive and efficient experience.",
      technologies: "React, TypeScript, Css, Html, Git",
      demoLink: "https://dev-014-movie-challenge-fw.vercel.app/",
      repoLink: "https://github.com/Deniisolo/DEV014-movie-challenge-fw",
    },
    {
      id: 2,
      title: "Denisolo.com",
      label: "Denisolo.com",
      imagen: "./public/img/Denisolo.png",
      description:
        "At Denisolo.com, you will find a collection of exciting projects, each with its own story and style.",
      technologies: "React, JavaScript, Css, Html, Git",
      demoLink: "https://www.denisolo.com/",
      repoLink: "https://github.com/Deniisolo/denisolo",
    },
    {
      id: 3,
      title: "Dataverse-chat",
      label: "Dataverse-chat",
      imagen: "./public/img/Dataverse.png",
      description:
        "I established communication with the OPENAI API, a platform to discover profiles of international music artists and connect with your favourites through its integrated chat.",
      technologies: "JavaScript, Css, Html, Git",
      demoLink: "https://dev-014-dataverse-chat.vercel.app/?#",
      repoLink: "https://github.com/Deniisolo/DEV014-dataverse-chat",
    },
    {
      id: 4,
      title: "Text Analyzer",
      label: "Text Analyzer",
      imagen: "./public/img/TextAnalizer.png",
      description:
        "Text Analyzer is a tool that counts characters and numbers, calculates the total sum of numbers and the average word length, useful for students, teachers and writers.",
      technologies: "JavaScript, Css, Html, Git",
      demoLink: "https://deniisolo.github.io/DEV014-text-analyzer/src/",
      repoLink: "https://github.com/Deniisolo/DEV014-text-analyzer",
    },
  ];
  console.log(project[0].title);
  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <button className="closeButton" onClick={onClose}>
          X
        </button>
        {/* <TitlePortfolio title={project.title} />
        <Label text={project.label} />
        <PhotoPortfolio imagen={project.imagen} />
        <Contactinformation ContactinformationParagraph={project.description} />
        <Contactinformation
          ContactinformationParagraph={project.technologies}
        />
        <DemoButon demoLink={project.demoLink} />
        <RepositoryButon repoLink={project.repoLink} /> */}

        <TitlePortfolio titlePorfolioCard={project.id} />
        <Label laberinformation={"chale"} />
        <PhotoPortfolio imagen={"chale"} />
        <Contactinformation ContactinformationParagraph={"chale"} />
        <Contactinformation ContactinformationParagraph={"chale"} />
        <DemoButon demoLink={"chale"} />
        <RepositoryButon repoLink={"chale"} />
      </div>
    </div>
  );
}
