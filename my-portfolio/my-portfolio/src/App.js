import React from "react";
import about from "./components/about";
import contact from "./components/contact";
import navbar from "./components/navbar";
import projects from "./components/projects";
import skills from "./components/skills";

export default function App() {
  return (
    <main>
      <navbar />
      <about />
      <projects />
      <skills />
      <contact />
    </main>
  );
}
