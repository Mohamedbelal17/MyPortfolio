import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import db from "../../Assets/Projects/db.png";
import pizza from "../../Assets/Projects/pizza.PNG";
import qualy from "../../Assets/Projects/qualy.PNG";
import booking from "../../Assets/Projects/booking.PNG";
import snake from "../../Assets/Projects/snack.PNG";
import cac from "../../Assets/Projects/cac.PNG";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={booking}
              isBlog={false}
              title="Chatify"
              description="Developing a Hotel Management System website using React.js. This project integrates several modern web development tools to create a robust and user-friendly solution for managing hotel operations. For Testing use UserName: mm@test.com
 Password: 123"
              ghLink="https://github.com/Mohamedbelal17/HotalSystem"
              demoLink="http://localhost:5173/login"
            />
          </Col>

          <Col md={4} className="A Qubly">
            <ProjectCard
              imgPath={qualy}
              isBlog={false}
              title="Bits-0f-C0de"
              description="Develop responsive websites using React and Tailwind
CSS.Expertise in delivering professional, high-quality web
solutions tailored to client needs, ensuring optimal
performance and a seamless user experience across all
devices.Consistently praised for achieving high levels of client
satisfaction"
              demoLink="https://qubly.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pizza}
              isBlog={false}
              title="Fact-React-Pizza"
              description="A responsive web application for a pizza restaurant using React and Tailwind CSS. The app features an intuitive interface for menu browsing, order customiztion, and seamless checkout, optimized
for both mobile and desktop experiences.

"
              ghLink="https://github.com/Mohamedbelal17/fact-react-pizza"
              demoLink="https://fact-react-pizza.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Enhanced Snake Game"
              description="Developed an enhanced Snake Game using JavaScript, HTML, and CSS. The game features improved graphics, responsive controls, and dynamic gameplay elements. Incorporated custom styling and animations to create a more engaging user experience."
              ghLink="https://github.com/Mohamedbelal17/Snake-Game"
              demoLink="https://snake-game-xi-nine.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cac}
              isBlog={false}
              title="Calculator"
              description="Developed a fully functional calculator using JavaScript, HTML, and CSS. It supports basic arithmetic operations, percentages, and decimal inputs, with a responsive and user-friendly interface."
              ghLink="https://github.com/Mohamedbelal17/Calculator"
              demoLink="https://calculator-lovat-tau-15.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={db}
              isBlog={false}
              title="Restaurant-Database"
              description="A well-designed restaurant database helps streamline restaurant operations. Enables efficient management of customer information,facilitates order tracking
and assists with inventory management"
              ghLink="https://drive.google.com/drive/folders/1in5fJ__grNdGAaCadG765YpfO7ygAQ2N"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
