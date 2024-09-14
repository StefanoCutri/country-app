import styles from "../../app/footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Stefano Cutri.</p>
      </footer>
    );
}
