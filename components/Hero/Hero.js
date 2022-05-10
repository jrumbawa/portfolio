import styles from './Hero.module.css'
import Button from '../base/Button'

export default function Hero() {
  return (
    <header className={styles.header}>
      <p className={styles.subtitle}>Jomar Rumbawa</p>
      <h1 className={styles.title}>Creative thinking & modern innovating</h1>
      <div>
        <Button route="#" text="Work" />
        <Button route="#" text="Resume" />
      </div>
    </header>
  )
}
