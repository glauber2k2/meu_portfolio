import Image from 'next/image';
import {
  Atom,
  FileJs,
  FileTs,
  FileCss,
  FileHtml,
  GitBranch,
} from 'phosphor-react';

import styles from './Presentation.module.css';

export default function Presentation() {
  return (
    <main className={styles.container}>
      <div className={styles.skills} data-aos='fade-up' data-aos-delay='100'>
        <div data-aos='fade-up' data-aos-delay='100'>
          <span>
            <h1 className={styles.nextLogo}>N</h1>
            <p>Next</p>
          </span>
        </div>

        <div data-aos='fade-up' data-aos-delay='100'>
          <span>
            <Atom size={52} weight='thin' />
            <p>React</p>
          </span>
        </div>

        <div data-aos='fade-up' data-aos-delay='100'>
          <span>
            <FileJs size={52} weight='thin' />
            <p>Javascript</p>
          </span>
        </div>

        <div data-aos='fade-up' data-aos-delay='100'>
          <span>
            <FileTs size={52} weight='thin' />
            <p>Typescript</p>
          </span>
        </div>

        <div data-aos='fade-up' data-aos-delay='100'>
          <span>
            <FileCss size={52} weight='thin' />
            <p>Css</p>
          </span>
        </div>

        <div data-aos='fade-up' data-aos-delay='100'>
          <span>
            <FileHtml size={52} weight='thin' />
            <p>Html</p>
          </span>
        </div>

        <div data-aos='fade-up' data-aos-delay='100'>
          <span>
            <GitBranch size={52} weight='thin' />
            <p>Git</p>
          </span>
        </div>
      </div>

      <div className={styles.diferentials}>
        <span data-aos='fade-up' data-aos-delay='100'>
          <h1 data-aos='fade-up' data-aos-delay='100'>
            Imagens com IA
          </h1>
          <p>
            Transformo seu site em uma obra de arte visual, criando imagens
            únicas e impactantes utlizando inteligência artificial.
          </p>
          <Image
            src='/images/iahand.png'
            width={1280}
            height={1280}
            alt='ia'
            className={styles.ia}
          />
        </span>
        <span data-aos='fade-up' data-aos-delay='100'>
          <h1>Percepção de Design</h1>
          <p>
            Transformo seu site em uma obra de arte visual, criando imagens
            únicas e impactantes utlizando inteligência artificial.
          </p>

          <Image
            src='/images/designface.png'
            width={1280}
            height={1280}
            alt='design'
            className={styles.design}
          />
        </span>

        <div data-aos='fade-up' data-aos-delay='100'>
          <h1 className={styles.fillh1}>DIFERENCIAIS</h1>
          <h1 className={styles.thinh1}>DIFERENCIAIS</h1>
          <h1 className={styles.fillh1}>DIFERENCIAIS</h1>
          <h1 className={styles.thinh1}>DIFERENCIAIS</h1>
          <h1 className={styles.fillh1}>DIFERENCIAIS</h1>
        </div>
      </div>
    </main>
  );
}
