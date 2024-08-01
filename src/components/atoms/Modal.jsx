// Modal.js
import React from "react";
import "./Modal.css";

export function Modal({ isOpen, onClose, project }) {
  if (!isOpen || !project) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="closeButton" onClick={onClose}>
          X
        </button>
        <h2>{project.title}</h2>
        <img
          key={project.id}
          src={project.imagen}
          alt={project.title}
          className="imagePorfolio"
        />
        <p>{project.description}</p>
        <p>{project.technologies}</p>
        <div className="containerButons">
          <a
            href={project.demoLink}
            className="demoLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
          <a
            href={project.repoLink}
            className="RepoLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository
          </a>
        </div>
      </div>
    </div>
  );
}
