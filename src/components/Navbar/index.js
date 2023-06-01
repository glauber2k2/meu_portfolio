import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

import { useEffect } from 'react';
import {
  ProjectorScreen,
  PaperPlaneTilt,
  MouseSimple,
  WhatsappLogo,
  CaretDown,
  InstagramLogo,
  GithubLogo,
  LinkedinLogo,
} from 'phosphor-react';

import styles from './Navbar.module.css';

export default function Navbar() {
  useEffect(() => {
    AOS.init({
      once: true,
    }); // Inicializa a biblioteca AOS
  }, []);

  const abrirWpp = () => {
    window.open('https://wa.me/message/RS2XYE5ZIENTB1', '_blank');
  };

  const abrirInsta = () => {
    window.open('https://www.instagram.com/devglauber/', '_blank');
  };

  const abrirGit = () => {
    window.open('https://github.com/glauber2k2/', '_blank');
  };

  const abrirLinkedin = () => {
    window.open(
      'https://www.linkedin.com/in/glauber-monteiro-40439b238/',
      '_blank'
    );
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navContainer}>
        <div className={styles.logo} data-aos='fade-up' data-aos-delay='100'>
          <Image src='/images/mylogo.png' width={1280} height={1280} alt='' />

          <div className={styles.title}>
            <h1>Glauber Monteiro</h1>
            <h3>Web Developer</h3>
          </div>
        </div>

        <div className={styles.buttons}>
          <button
            data-aos='fade-up'
            data-aos-delay='400'
            onClick={() => {
              const targetElement = document.getElementById('skills');
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <MouseSimple size={26} weight='fill' />
            <p>Habilidades</p>
          </button>

          <button
            data-aos='fade-up'
            data-aos-delay='300'
            onClick={() => {
              const targetElement = document.getElementById('projects');
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <ProjectorScreen size={26} weight='fill' />
            <p>Projetos</p>
          </button>
        </div>
      </nav>
      <div className={styles.name}>
        <h1 data-aos='fade-up' data-aos-delay='600'>
          Glauber
        </h1>
        <h1 data-aos='fade-up' data-aos-delay='700'>
          Monteiro
        </h1>
        <p data-aos='fade-up' data-aos-delay='800'>
          Sou desenvolvedor front-end, tenho 21 anos e trabalho com criação de
          websites. Atualmente moro em João Pessoa, PB!
        </p>

        <button
          onClick={abrirWpp}
          className={styles.msg}
          data-aos='fade-up'
          data-aos-delay='900'
        >
          <span className={styles.msgContent}>
            <WhatsappLogo size={32} weight='fill' />
            Mandar mensagem
          </span>
        </button>

        <button onClick={abrirInsta} data-aos='fade-up' data-aos-delay='950'>
          <InstagramLogo size={28} weight='fill' />
        </button>
        <button onClick={abrirGit} data-aos='fade-up' data-aos-delay='1000'>
          <GithubLogo size={28} weight='fill' />
        </button>
        <button
          onClick={abrirLinkedin}
          data-aos='fade-up'
          data-aos-delay='1050'
        >
          <LinkedinLogo size={28} weight='fill' />
        </button>
      </div>
      <CaretDown
        size={42}
        weight='bold'
        className={styles.scrollDown}
        data-aos='fade-up'
        data-aos-delay='2000'
        onClick={() => {
          const targetElement = document.getElementById('skills');
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />
    </div>
  );
}
