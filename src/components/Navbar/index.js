import styles from "../Navbar/Navbar.module.css";

import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <Image
            src="images/icon.svg"
            width={420}
            height={420}
            alt="teste"
            className={styles.icon}
          />
          <h1>DEV Glauber Monteiro</h1>
        </div>
        <h3>full-stack developer</h3>
        <div className={styles.link}>
          <a
            onClick={() => {
              const locationElement = document.getElementById("about");
              locationElement?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            Quem sou
          </a>
          <hr color="#737373" />

          <a
            onClick={() => {
              const locationElement = document.getElementById("skills");
              locationElement?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            Habilidades
          </a>

          <hr color="#737373" />

          <a
            onClick={() => {
              const locationElement = document.getElementById("projects");
              locationElement?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            Projetos
          </a>

          <hr color="#737373" />

          <a
            onClick={() => {
              const locationElement = document.getElementById("exp");
              locationElement?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            Experiencias
          </a>

          <hr color="#737373" />

          <a
            onClick={() => {
              const locationElement = document.getElementById("contact");
              locationElement?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            Contratar
          </a>
        </div>
      </div>
      <hr color="#303030" />
    </>
  );
}
