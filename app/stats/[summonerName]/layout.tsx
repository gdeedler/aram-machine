import styles from './styles.module.css';
import BackButton from './backbutton';
import Search from '../../search';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <Link href={"/"} className={styles.logo}>ARAM MACHINE</Link>
        <div className={styles.search}>
          <Search />
          <BackButton>Back</BackButton>
        </div>
      </div>
      {children}
    </div>
  );
}
