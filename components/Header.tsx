import Image from 'next/image'
import styles from '../styles/Header.module.css'

function Header({title, content} : {title:string, content:string}) {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.titleContainer}>
          <Image src={"/info.svg"} width="14px" height="14px" alt='info'/>
          <p className={styles.title}>{title}</p>
        </div>
        <p className={styles.description}>{content}</p>
      </div>
    </header>
  );
}

export default Header

