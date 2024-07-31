// Modal.js
import React from "react";
import "./Modal.css";

export function Modal({ isOpen, onClose, project }) {
  if (!isOpen || !project) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{project.title}</h2>
        <img src={project.imagen} alt={project.title} />
        <p>{project.description}</p>
        <p>{project.technologies}</p>
        <div>
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
            Repo
          </a>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
