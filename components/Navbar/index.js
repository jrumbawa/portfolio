import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <p>Jomar</p>
      <ul className={styles.navList}>
        <li>Skills</li>
        <li>Work</li>
        <li>Testimonials</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}
