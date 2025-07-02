import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ProjectsCards from "../ProjectCards";

import projects from "../../data/projects.json";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-[100px] flex-1">
        <ProjectsCards projects={projects} />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
