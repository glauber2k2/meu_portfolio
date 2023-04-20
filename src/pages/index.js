import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.about} id="about">
          <Image
            src="/images/profile.jpg"
            width={420}
            height={420}
            alt="foto de perfil"
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
              estudantes no mercado de trabalho, que possui de todo Brasil.
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
              quando me deparo com algum problema a ser resolvido, busco ao
              máximo resolve-lo da melhor maneira possível, e não desisto
              enquanto não for resolvido, buscando sempre encontrar uma forma
              para que seja solucionado.
            </p>
            <br />
            <h4>- Sociável</h4>
            <p>
              Me considero um bom profissional tanto singular, como
              coletivamente, quando me deparo com algum colega de trabalho com
              dificuldade em algo em que sei resolver, não meço esforços para
              ajuda-lo a solucionar, assim como quando sou eu que me deparo com
              algum empecilho que estou com dificuldade de solucionar, não terei
              nenhum impedimento para chegar e perguntar, pois assim adquiro um
              novo conhecimento além de resolver a dificuldade encontrada.
            </p>
          </span>
        </div>

        <div className={styles.skills} id="skills">
          <h1>Habilidades:</h1>
          <span>
            <Image
              src="/images/js.png"
              width={50}
              height={50}
              className={styles.js}
              alt="js"
            />

            <Image
              src="/images/next.png"
              width={50}
              height={50}
              className={styles.next}
              alt="next"
            />

            <Image
              src="/images/react.png"
              width={50}
              height={50}
              className={styles.react}
              alt="react"
            />

            <Image
              src="/images/node.png"
              width={50}
              height={50}
              className={styles.node}
              alt="node"
            />

            <Image
              src="/images/html.png"
              width={50}
              height={50}
              className={styles.html}
              alt="html"
            />

            <Image
              src="/images/css.png"
              width={50}
              height={50}
              className={styles.css}
              alt="css"
            />

            <Image
              src="/images/py.png"
              width={40}
              height={40}
              className={styles.py}
              alt="py"
            />

            <Image
              src="/images/django.png"
              width={40}
              height={40}
              className={styles.django}
              alt="node"
            />
          </span>
        </div>

        <div className={styles.projects} id="projects">
          <h1>Meus Projetos:</h1>

          <span>
            <h2>Hamburgueria</h2>
            <Link
              href="https://hamburgueria-nextjs-88eb0hkfa-glauber2k2.vercel.app"
              legacyBehavior
            >
              <a>
                <Image
                  src="/images/burguer.png"
                  width={720}
                  height={400}
                  className={styles.imgproject}
                  alt="burguer"
                />
              </a>
            </Link>
          </span>

          <span>
            <h2>DripStore</h2>
            <Link
              href="https://loja-next-3kk8uyc8h-glauber2k2.vercel.app"
              legacyBehavior
            >
              <a>
                <Image
                  src="/images/DripStore.png"
                  width={720}
                  height={400}
                  className={styles.imgproject}
                  alt="burguer"
                />
              </a>
            </Link>
          </span>

          <span>
            <h2>Rede Social</h2>
            <Image
              src="/images/rede.png"
              width={720}
              height={400}
              className={styles.imgproject}
              alt="rede"
            />
          </span>
        </div>
        <hr color="#303030" />
        <div className={styles.exp} id="exp">
          <h1>Experiencias:</h1>
          <br />
          <span>
            <h2>Dev Junior</h2> <br />
            <p>
              Sou desenvolvedor Junior, entrei na area da programação há 3 anos.{" "}
              <br />
              comecei a aprender na faculdade,e após isso fui buscando me
              aprofundar mais nas recentes tecnologias presentes no mercado, ja
              fiz diversos cursos online de programação como Rocketseat Ignite,
              Matheus Silva, Pythonando, Matheus Battisti... <br />
              <br />
              já realizei tanto projetos freelancers maioria em front-end
              utilizando Javascript, Typescript, React e Nextjs. e atualmente
              trabalho home-office na Fabrica de Softwares na area de Back-end,
              para uma construtora de Porto-Alegre utilizando a linguagem python
              com o framework django.
            </p>
          </span>
        </div>
        <div className={styles.contact} id="contact"></div>
      </div>
      <Footer />
    </>
  );
}
