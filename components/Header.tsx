import Image from 'next/image'
import styles from '../styles/Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.titleContainer}>
          <Image src={"/../public/info.png"} width="14px" height="14px" alt='info'/>
          <p className={styles.title}>Le concept</p>
        </div>
        <p className={styles.description}>Installer un limiteur de débit sur votre pommeau de douche peut vous permettre de réduire drastiquement votre consommation d’eau !</p>
      </div>
    </header>
  );
}

export default Header

