import styles from './styles.module.css';
import Button from './button';
import Search from '../../search';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <Link href={"/"} className={styles.logo}>ARAM MACHINE</Link>
        <Search />
        <Button route="/">Back</Button>
      </div>
      {children}
    </div>
  );
}
