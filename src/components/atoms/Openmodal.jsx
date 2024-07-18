import React, { useState } from "react";
import { Modal } from "./Modal";
import { Cardportfolio } from "../../views/Cardportfolio";
import "./Openmodal.css";

export function Openmodal() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectProject] = useState(null);

  const project = [
    {
      id: 1,
      title: "Movie-Challenge",
      label: "Movie-Challenge",
      imagen: "./public/img/Moviechallenge.png",
      description:
        "Movie Challenge is a platform for browsing, filtering and sorting movies with data from The Movie Database API V3. It offers an intuitive and efficient experience.",
      tecnologias: "React, TypeScript, Css, Html, Git",
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
      tecnologias: "React, JavaScript, Css, Html, Git",
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
      tecnologias: "JavaScript, Css, Html, Git",
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
      tecnologias: "JavaScript, Css, Html, Git",
      demoLink: "https://deniisolo.github.io/DEV014-text-analyzer/src/",
      repoLink: "https://github.com/Deniisolo/DEV014-text-analyzer",
    },
  ];
  const openModal = (project) => {
    setSelectProject(false);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectProject(null);
  };

  return (
    <div>
      <button
        key={project.id}
        className="openModalButton"
        onClick={() => openModal(project)}
      >
        More: {project.title}
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedProject && (
          <Cardportfolio project={selectedProject} onClose={closeModal} />
        )}
      </Modal>
    </div>
  );
}
