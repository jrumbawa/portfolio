import styles from './Hero.module.css'

export default function Hero() {
  return (
    <header className={styles.header}>
      <p className={styles.name}>Jomar Rumbawa</p>
      <h1 className={styles.title}>
        Bringing ideas to reality and keeping them creative.
      </h1>
      <p className={styles.subtitle}>
        I'm Jomar, a frontend developer who specializes in creating websites and
        user interfaces.
      </p>
    </header>
  )
}
