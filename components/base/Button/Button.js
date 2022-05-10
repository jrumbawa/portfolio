import styles from './Button.module.css'

export default function Button({ route, text }) {
  return (
    <a href={route} className={styles.button}>
      {text}
    </a>
  )
}
