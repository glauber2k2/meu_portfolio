import Image from 'next/image';
import ProjectWindow from '../ProjectWindow';
import { ArrowsVertical } from 'phosphor-react';

import styles from './Projects.module.css';

export default function Projects() {
  return (
    <main className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.title}>
          <h1>
            MEUS <span>PROJETOS</span>
          </h1>
          <h3>
            Venha conhecer alguns de meus ultimos projetos! e veja o sentimento
            que um site bem feito é capaz de passar ao acessante.
          </h3>
        </div>
        <div className={styles.images}>
          <Image
            src='/images/projects1.png'
            width={1280}
            height={1280}
            alt=''
            className={styles.image1}
          />

          <Image
            src='/images/projects2.png'
            width={1280}
            height={1280}
            alt=''
            className={styles.image2}
          />

          <Image
            src='/images/project3.png'
            width={1280}
            height={1280}
            alt=''
            className={styles.image3}
          />

          <Image
            src='/images/projects4.png'
            width={1280}
            height={1280}
            alt=''
            className={styles.image4}
          />
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.notebook}>
          <ProjectWindow />
        </div>

        <ArrowsVertical size={64} color='#fcfcfc' weight='duotone' />
        <div className={styles.projectMsg}>
          <h2>
            Use o notebook para <span>visualizar</span> os projetos.
          </h2>

          <h3>
            Clique no projeto que deseja visualizar, e automaticamente será
            <span>redirecionado</span> para a visualização completa da página.
          </h3>
        </div>
      </div>
    </main>
  );
}
