import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <p className={styles.navLogo}>
        Jomar.<span className={styles.navLogoSpan}>Rumbawa</span>
      </p>
      <i className={`bi bi-justify ${styles.navButton}`}></i>
      <ul className={styles.navList}>
        <li>Skills</li>
        <li>Work</li>
        <li>Testimonials</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}
