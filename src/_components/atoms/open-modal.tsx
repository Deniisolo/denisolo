import { useState } from "react";
import { Modal } from "./Modal";
import "./Openmodal.css";

export function Openmodal(props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };
  return (
    <div>
      <button
        className="openModalbutton"
        onClick={() => openModal(props.portafolio[0])}
      >
        Ver más
      </button>

      {selectedProject && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          project={selectedProject}
        />
      )}
    </div>
  );
}
