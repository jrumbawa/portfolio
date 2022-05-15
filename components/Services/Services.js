import styles from './Services.module.css'

export default function Services() {
  return (
    <section className={styles.services}>
      <h2>Quality Services</h2>
      <div className={styles.services}>
        <article className={styles.service}>
          <p className={styles.serviceTitle}>
            <span className={styles.blueText}>01.</span>Frontend Development
          </p>
          <p className={styles.serviceDescription}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            ullam sit eaque odit quo earum numquam velit veritatis, repellendus
            molestias.
          </p>
        </article>
        <article className={styles.service}>
          <p className={styles.serviceTitle}>
            <span className={styles.blueText}>02.</span>Frontend Design
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            ullam sit eaque odit quo earum numquam velit veritatis, repellendus
            molestias.
          </p>
        </article>
      </div>
    </section>
  )
}
