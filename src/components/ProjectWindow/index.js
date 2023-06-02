import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectWindow.module.css';

export default function ProjectWindow() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className={styles.container}>
      <Image src='/images/laptop.png' width={1080} height={1080} alt='' />
      <div className={styles.window}>
        <div className={styles.logo}>
          <Image src='/images/mylogo.png' width={1080} height={1080} alt='' />
          <h1>ROLE P/ BAIXO</h1>
        </div>

        <Link href='https://hamburgueria-nextjs.vercel.app/' legacyBehavior>
          <a target='_blank'>
            <div
              className={`${styles.niceBurguer} ${
                hoveredItem === 'NiceBurguer' ? styles.hovered : ''
              }`}
              onMouseEnter={() => handleMouseEnter('NiceBurguer')}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src='/images/project_image/niceburguer.jpg'
                width={1080}
                height={1080}
                alt=''
              />
              <h1>NiceBurguer</h1>
              {hoveredItem === 'NiceBurguer' && (
                <p>JavaScript, Next, React, Html, Css</p>
              )}
            </div>
          </a>
        </Link>

        <Link href='https://e-commerce-six-smoky.vercel.app/' legacyBehavior>
          <a target='_blank'>
            <div
              className={`${styles.commerce} ${
                hoveredItem === 'E-commerce' ? styles.hovered : ''
              }`}
              onMouseEnter={() => handleMouseEnter('E-commerce')}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src='/images/project_image/ecommerce.jpg'
                width={1080}
                height={1080}
                alt=''
              />
              <h1>E-commerce</h1>
              {hoveredItem === 'E-commerce' && (
                <p>Typescript, Next, React, Html, Css</p>
              )}
            </div>
          </a>
        </Link>

        <Link href='https://trinity-sepia.vercel.app/' legacyBehavior>
          <a target='_blank'>
            <div
              className={`${styles.trinity} ${
                hoveredItem === 'Trinity' ? styles.hovered : ''
              }`}
              onMouseEnter={() => handleMouseEnter('Trinity')}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src='/images/project_image/trinity.jpg'
                width={1080}
                height={1080}
                alt=''
              />
              <h1>Trinity</h1>
              {hoveredItem === 'Trinity' && (
                <p>JavaScript, Next, React, Html, Css</p>
              )}
            </div>
          </a>
        </Link>

        <Link href='https://redesocial-seven.vercel.app/' legacyBehavior>
          <a target='_blank'>
            <div
              className={`${styles.redesocial} ${
                hoveredItem === 'Rede Social' ? styles.hovered : ''
              }`}
              onMouseEnter={() => handleMouseEnter('Rede Social')}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src='/images/project_image/rede.jpg'
                width={1080}
                height={1080}
                alt=''
              />
              <h1>Rede social</h1>
              {hoveredItem === 'Rede Social' && (
                <p>Typescript, React, Html, Css</p>
              )}
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
