import Image from 'next/image';
import Link from 'next/link';

import styles from './ProjectWindow.module.css';

export default function ProjectWindow() {
  return (
    <div className={styles.container}>
      <Image src='/images/laptop.png' width={1080} height={1080} alt='' />
      <div className={styles.window}>
        <div className={styles.logo}>
          <Image src='/images/mylogo.png' width={1080} height={1080} alt='' />
          <h1>ROLE P/ BAIXO</h1>
        </div>

        <Link href='/' legacyBehavior>
          <div className={styles.inWindow}>
            <Image
              src='/images/project_image/niceburguer.jpg'
              width={1080}
              height={1080}
              alt=''
            />
            <h1>NiceBurguer</h1>
          </div>
        </Link>

        <Link href='/' legacyBehavior>
          <div className={styles.inWindow}>
            <Image
              src='/images/project_image/ecommerce.jpg'
              width={1080}
              height={1080}
              alt=''
            />
            <h1>E-commerce</h1>
          </div>
        </Link>

        <Link href='/' legacyBehavior>
          <div className={styles.inWindow}>
            <Image
              src='/images/project_image/trinity.jpg'
              width={1080}
              height={1080}
              alt=''
            />
            <h1>Trinity</h1>
          </div>
        </Link>

        <Link href='/' legacyBehavior>
          <div className={styles.inWindow}>
            <Image
              src='/images/project_image/rede.jpg'
              width={1080}
              height={1080}
              alt=''
            />
            <h1>Rede social</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
