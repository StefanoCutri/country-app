import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Welcome to the Country Info App</h1>
      <p className={styles.description}>Explore detailed information about countries around the world.</p>
      <main className={styles.main}>
        
        {/* {Country list} */}
        <p>Loading country data...</p>
      </main>
    </div>
  );
}
