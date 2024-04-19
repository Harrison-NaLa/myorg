import styles from './page.module.css';
import Link from 'next/link';

export default function Index() {
  return (
    <div className={styles.page}>
      <header className="main_header flex flex-row justify-center">
        <Link className="header_item" href="./location">
          Ubicaión
          </Link>
      </header>
    </div>
  );
}
