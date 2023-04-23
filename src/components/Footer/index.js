import styles from "../Footer/Footer.module.css";

import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        <Image
          src="images/icon.svg"
          width={420}
          height={420}
          alt="teste"
          className={styles.icon}
        />
        <div className={styles.footcenter}>
          <h1>contacte-me:</h1>
          <div className={styles.link}>
            <a href="https://www.instagram.com/glauber.sm/" target="_blank">
              Instagram
            </a>
            <hr color="#ffffff" />
            <a href="https://github.com/glauber2k2" target="_blank">
              Github
            </a>
            <hr color="#ffffff" />
            <a
              href="https://www.linkedin.com/in/glauber-monteiro-40439b238/"
              target="_blank"
            >
              Linkedin
            </a>
            <hr color="#ffffff" />
            <a href="mailto:devglaubermonteiro@gmail.com" target="_blank">
              Email
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
