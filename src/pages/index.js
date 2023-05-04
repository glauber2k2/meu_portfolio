import Navbar from '../components/Navbar';
import { useKeenSlider } from 'keen-slider/react';

import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import 'keen-slider/keen-slider.min.css';

const animation = { duration: 20000, easing: (t) => t }; //animação da esteira de projetos.

export default function Home() {
  //esteira de projetos
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
    },

    loop: true,

    drag: false,
    created(s) {
      s.moveToIdx(2, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 2, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 2, true, animation);
    },
  });

  //auto slider
  const [secondSliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  return (
    <>
      <Head>
        <title>Dev Glauber</title>
      </Head>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.about} id='about'>
          <Image
            src='/images/profile.jpg'
            width={420}
            height={420}
            alt='foto de perfil'
            className={styles.profile}
          />
          <span>
            <h1>Sobre mim:</h1> <br />
            <br />
            <h3>Quem sou?</h3> <br />
            <p>
              Me chamo Glauber Monteiro, tenho 21 anos, e sou natural de João
              Pessoa, PB, e trabalho como desenvolvedor junior.
            </p>
            <br />
            <br />
            <h3>Formação acadêmica?</h3> <br />
            <p>
              Estou quase me formando em Ciências da Computação, pela Unipê,
              faculdade bastante conhecida pelo Brasil pela sua empresa interna:
              Fabrica de Softwares, no qual é responsavel por ingressar os
              estudantes no mercado de trabalho, que possui clientes de todo
              Brasil.
            </p>
            <br />
            <br />
            <h3>Qualidades:</h3>
            <p>
              Tanto na vida, quanto profissionalmente, possuo diversas
              qualidades que me fazem ter um bom desempenho, dentre elas estão:
            </p>
            <br />
            <br />
            <h4>- Rápido aprendizado</h4>
            <p>
              Pelo fato que apesar de me indentificar com a área eu gosto
              daquilo que estou fazendo, e isso acaba me dando certa facilidade
              de aprender coisas novas.
            </p>
            <br />
            <h4>- Foco na resolução do problema</h4>
            <p>
              Quando me deparo com algum problema a ser resolvido, busco ao
              máximo resolve-lo da melhor maneira possível, e não desisto
              enquanto não for resolvido, buscando sempre encontrar uma forma
              para que seja solucionado.
            </p>
            <br />
            <h4>- Trabalho em equipe</h4>
            <p>
              Me considero um bom profissional tanto singular, como
              coletivamente, quando me deparo com algum colega de trabalho com
              dificuldade em algo em que sei resolver, não meço esforços para
              ajuda-lo a solucionar, assim como quando sou eu que me deparo com
              algum empecilho que estou com dificuldade, não terei nenhum
              impedimento para chegar e perguntar, pois assim adquiro um novo
              conhecimento além de resolver a dificuldade encontrada.
            </p>
          </span>
        </div>

        <div className={styles.skills} id='skills'>
          <h1>Habilidades:</h1>
          <span>
            <Image
              src='/images/js.png'
              width={50}
              height={50}
              className={styles.js}
              alt='js'
            />

            <Image
              src='/images/next.png'
              width={50}
              height={50}
              className={styles.next}
              alt='next'
            />

            <Image
              src='/images/react.png'
              width={50}
              height={50}
              className={styles.react}
              alt='react'
            />

            <Image
              src='/images/node.png'
              width={50}
              height={50}
              className={styles.node}
              alt='node'
            />

            <Image
              src='/images/html.png'
              width={50}
              height={50}
              className={styles.html}
              alt='html'
            />

            <Image
              src='/images/css.png'
              width={50}
              height={50}
              className={styles.css}
              alt='css'
            />

            <Image
              src='/images/py.png'
              width={40}
              height={40}
              className={styles.py}
              alt='py'
            />

            <Image
              src='/images/django.png'
              width={40}
              height={40}
              className={styles.django}
              alt='node'
            />
          </span>
        </div>
        <h1 className={styles.titleprojects}> Projetos Realizados: </h1>
        <div
          id='projects'
          ref={sliderRef}
          className={`${styles.projects} ${'keen-slider'}`}
        >
          <span className='keen-slider__slide'>
            <h2>Hamburgueria</h2>
            <Link
              href='https://hamburgueria-nextjs-88eb0hkfa-glauber2k2.vercel.app'
              legacyBehavior
            >
              <a target='_blank' rel='noopener noreferrer'>
                <Image
                  src='/images/burguer.png'
                  width={420}
                  height={300}
                  alt='burguer'
                  className={styles.imgproject}
                />
              </a>
            </Link>
          </span>

          <span className='keen-slider__slide'>
            <h2>DripStore</h2>
            <Link href='https://loja-next-js-ebon.vercel.app' legacyBehavior>
              <a target='_blank' rel='noopener noreferrer'>
                <Image
                  src='/images/drip.png'
                  width={420}
                  height={300}
                  className={styles.imgproject}
                  alt='DripStore'
                />
              </a>
            </Link>
          </span>

          <span className='keen-slider__slide'>
            <h2>Rede Social</h2>
            <Link href='https://redesocial-seven.vercel.app' legacyBehavior>
              <a target='_blank' rel='noopener noreferrer'>
                <Image
                  src='/images/rede.png'
                  width={420}
                  height={300}
                  className={styles.imgproject}
                  alt='rede'
                />
              </a>
            </Link>
          </span>

          <span className='keen-slider__slide'>
            <h2>Hamburgueria</h2>
            <Link
              href='https://hamburgueria-nextjs-88eb0hkfa-glauber2k2.vercel.app'
              legacyBehavior
            >
              <a target='_blank' rel='noopener noreferrer'>
                <Image
                  src='/images/burguer.png'
                  width={420}
                  height={300}
                  alt='burguer'
                  className={styles.imgproject}
                />
              </a>
            </Link>
          </span>

          <span className='keen-slider__slide'>
            <h2>DripStore</h2>
            <Link href='https://loja-next-js-ebon.vercel.app' legacyBehavior>
              <a target='_blank' rel='noopener noreferrer'>
                <Image
                  src='/images/drip.png'
                  width={420}
                  height={300}
                  className={styles.imgproject}
                  alt='DripStore'
                />
              </a>
            </Link>
          </span>

          <span className='keen-slider__slide'>
            <h2>Rede Social</h2>
            <Link href='https://redesocial-seven.vercel.app' legacyBehavior>
              <a target='_blank' rel='noopener noreferrer'>
                <Image
                  src='/images/rede.png'
                  width={420}
                  height={300}
                  className={styles.imgproject}
                  alt='rede'
                />
              </a>
            </Link>
          </span>
        </div>
        <hr color='#303030' />
        <div className={styles.exp} id='exp'>
          <h1>Experiencias:</h1>
          <br />
          <span>
            <h2>Desenvolvedor Junior</h2> <br />
            <p>
              Sou dev Junior, entrei na area da programação há 3 anos.
              <br />
              Comecei a aprender na faculdade,e após isso fui buscando me
              aprofundar mais nas recentes tecnologias presentes no mercado, já
              fiz diversos cursos online de programação como Rocketseat Ignite,
              Matheus Silva, Pythonando, Matheus Battisti...entre outros <br />
              <br />
              Também já realizei projetos freelancers em sua maioria em
              front-end utilizando Javascript, Typescript, React e Nextjs. e
              atualmente trabalho home-office na Fabrica de Softwares na area de
              Back-end, para uma construtora de Porto-Alegre utilizando a
              linguagem python com o framework django.
            </p>
          </span>
        </div>

        <div className={styles.differentialsBox}>
          <div
            ref={secondSliderRef}
            className={`${'keen-slider'} ${styles.slideCards}`}
            style={{
              width: `${100}%`,
              height: `${100}%`,
            }}
          >
            <div className='keen-slider__slide number-slide1'>
              <span>
                <Image src='/images/ia.svg' width={50} height={50} alt='' />
                <h1>Imagens com IA</h1>
              </span>
              <h3>
                Domino o stable diffusion IA, ferramenta de criação de imagens
                utilizando inteligencia artificial, que agrega bastante para
                criar imagens especificas e únicas para a aplicação.
              </h3>
            </div>

            <div className='keen-slider__slide number-slide2'>
              <span>
                <Image src='/images/back.svg' width={50} height={50} alt='' />
                <h1>Entusiasta em back-end</h1>
              </span>
              <h3>
                Me aventuro bastante na área de back-end, e já participei um
                pouco do back-end de alguns de meus ultimos projetos, tenho
                vontade de virar um full-stack futuramente
              </h3>
            </div>

            <div className='keen-slider__slide number-slide3'>
              <span>
                <Image src='/images/clean.svg' width={50} height={50} alt='' />
                <h1>Clean Code</h1>
              </span>
              <h3>
                Busco ao máximo deixar meu código o mais legível, e bem
                documentado para futuras manutenções e facilitar para que outras
                pessoas entendam meu código.
              </h3>
            </div>

            <div className='keen-slider__slide number-slide4'>
              <span>
                <Image src='/images/eye.svg' width={50} height={50} alt='' />
                <h1>Percepção de design</h1>
              </span>
              <h3>
                Há bastante tempo que tenho design como hobbie, e isso acabou me
                dando uma maior percepção esteticamente das coisas, por isso
                tenho maior facilidade de entregar os projetos com um bom visual
                gráfico.
              </h3>
            </div>
          </div>

          <div className={styles.titleElement}>
            <h1>Esses são os meus diferenciais</h1>
            <h3>pontos que impactam positivamente nos projetos.</h3>
          </div>
        </div>

        <hr color='#303030' />

        <div className={styles.contact} id='contact'>
          <div className={styles.titleElement}>
            <h1>Entre em contato:</h1>
            <h3>Me envie um email, que retornarei sua mensagem.</h3>
            <span className={styles.socials}>
              <Link href='https://github.com/glauber2k2' legacyBehavior>
                <a target='_blank' rel='noopener noreferrer'>
                  <Image
                    src='/images/github.png'
                    width={25}
                    height={25}
                    alt=''
                    className={styles.socialIcon}
                  />
                </a>
              </Link>

              <Link
                href='https://www.linkedin.com/in/glauber-monteiro-40439b238/'
                legacyBehavior
              >
                <a target='_blank' rel='noopener noreferrer'>
                  <Image
                    src='/images/linkedin.webp'
                    width={25}
                    height={25}
                    alt=''
                    className={styles.socialIcon}
                  />
                </a>
              </Link>

              <Link href='https://www.instagram.com/devglauber/' legacyBehavior>
                <a target='_blank' rel='noopener noreferrer'>
                  <Image
                    src='/images/insta.png'
                    width={25}
                    height={25}
                    alt=''
                    className={styles.socialIcon}
                  />
                </a>
              </Link>
            </span>
          </div>

          <div className={styles.contactcontainer}>
            <Image src='/images/airplane.svg' width={280} height={280} alt='' />
            <form
              action='https://formsubmit.co/69079625f263f6861d9c3bff3ab50743'
              method='POST'
            >
              <label for='email'>Seu Email:</label>
              <input type='email' name='email' required />
              <label for='message'>Sua Proposta:</label>
              <textarea type='text-area' name='message' required />
              <button type='submit'> Enviar </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
