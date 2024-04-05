import Image from 'next/image';
import styles from './page.module.css';
import ExportHeading from '../components/Heading';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>I am in next app</h1>
        <ExportHeading />
      </div>
    </main>
  );
}
