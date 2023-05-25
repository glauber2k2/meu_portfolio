import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
import {
  ProjectorScreen,
  PaperPlaneTilt,
  MouseSimple,
  WhatsappLogo,
  CaretDown,
} from 'phosphor-react';

import styles from './Navbar.module.css';

export default function Navbar() {
  useEffect(() => {
    AOS.init({
      once: true,
    }); // Inicializa a biblioteca AOS
  }, []);

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
          <div
            className={styles.button}
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <ProjectorScreen size={32} weight='fill' />
            <p>Projetos</p>
          </div>

          <div
            className={styles.button}
            data-aos='fade-up'
            data-aos-delay='400'
          >
            <MouseSimple size={32} weight='fill' />
            <p>Habilidades</p>
          </div>

          <div
            className={styles.button}
            data-aos='fade-up'
            data-aos-delay='500'
          >
            <PaperPlaneTilt size={32} weight='fill' />
            <p>Contato</p>
          </div>
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

        <button className={styles.msg} data-aos='fade-up' data-aos-delay='900'>
          <span className={styles.msgContent}>
            <WhatsappLogo size={32} weight='thin' />
            Mandar mensagem
          </span>
        </button>
      </div>
      <CaretDown
        size={42}
        weight='thin'
        className={styles.scrollDown}
        data-aos='fade-up'
        data-aos-delay='2000'
      />
    </div>
  );
}
