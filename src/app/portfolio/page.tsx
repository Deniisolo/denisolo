"use client";

import { ProjectCard } from "~/_components/atoms/project-card";
import { project1, project2, project3, project4 } from "./data";
import { useState } from "react";
import { Modal, type Project } from "~/_components/atoms/modal";

export default function Portfolio() {
  const [currentProject, setCurrentProject] = useState<Project | undefined>(
    undefined,
  );

  return (
    <div className="flex flex-1 items-center justify-center gap-6">
      <Modal
        closeCallback={() => setCurrentProject(undefined)}
        project={currentProject}
      />

      <div onClick={() => setCurrentProject(project1)}>
        <ProjectCard
          hero={<div>Movie-Challenge</div>}
          contents={
            <div>
              Movie Challenge is a platform for browsing, filtering and sorting
              movies with data from The Movie Database API V3. It offers an
              intuitive and efficient experience.
            </div>
          }
          technologies={{
            react: true,
            typescript: true,
            css: true,
            html: true,
            git: true,
            figma: false,
            javascript: false,
          }}
          color={"#DBCEEF"}
        />
      </div>

      <div onClick={() => setCurrentProject(project2)}>
        <ProjectCard
          hero={<div>Denisolo.com</div>}
          contents={
            <div>
              At Denisolo.com, you will find a collection of exciting projects,
              each with its own story and style.
            </div>
          }
          technologies={{
            react: false,
            typescript: false,
            css: true,
            html: true,
            git: true,
            figma: true,
            javascript: true,
          }}
          color={"#EECEEF"}
        />
      </div>

      <div onClick={() => setCurrentProject(project3)}>
        <ProjectCard
          hero={<div>Dataverse-chat</div>}
          contents={
            <div>
              I established communication with the OPENAI API, a platform to
              discover profiles of international music artists and connect with
              your favourites through its integrated chat.
            </div>
          }
          technologies={{
            react: false,
            typescript: false,
            css: true,
            html: true,
            git: true,
            figma: true,
            javascript: true,
          }}
          color={"#EFCED4"}
        />
      </div>

      <div onClick={() => setCurrentProject(project4)}>
        <ProjectCard
          hero={<div> Text Analyzer </div>}
          contents={
            <div>
              Text Analyzer is a tool that counts characters and numbers,
              calculates the total sum of numbers and the average word length,
              useful for students, teachers and writers.
            </div>
          }
          technologies={{
            react: false,
            typescript: false,
            css: true,
            html: true,
            git: true,
            figma: true,
            javascript: true,
          }}
          color={"#DBCEEF"}
        />
      </div>
    </div>
  );
}
