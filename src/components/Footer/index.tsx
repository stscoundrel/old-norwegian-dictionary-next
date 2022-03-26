import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.section}>
      <div className="container">
        <p>Copyright © {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
