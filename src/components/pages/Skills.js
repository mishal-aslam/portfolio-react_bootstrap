import React from "react";
import Header from "../../components/Header";
import Particle from "../../Particle";
import Card from "./Card.js";

function Skills() {
  const skillsData = [
    {
      id: 1,
      heading: 'HTML',
      progress: 90
    },
    {
      id: 2,
      heading: 'CSS',
      progress: 90
    },
    {
      id: 3,
      heading: 'SCSS',
      progress: 90
    },
    {
      id: 4,
      heading: 'BOOTSTRAP',
      progress: 90
    },
    {
      id: 5,
      heading: 'TAILWIND',
      progress: 90
    },
    {
      id: 6,
      heading: 'JAVASCRIPT',
      progress: 70
    },
    {
      id: 7,
      heading: 'JQUERY',
      progress: 80
    },
    {
      id: 8,
      heading: 'REACT',
      progress: 80
    },
    {
      id: 9,
      heading: 'GITHUB',
      progress: 60
    }
  ];

  return (
    <>
      <Particle />
      <div className="container">
        <Header />
        <div className="row skills">
          {skillsData.map((card) => (
            <Card
              key={card.id}
              heading={card.heading}
              progress={card.progress}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
