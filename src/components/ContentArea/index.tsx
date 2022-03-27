import styles from './ContentArea.module.scss'

interface ContentAreaProps{
  children: JSX.Element | JSX.Element[],
}

export default function ContentArea({ children }: ContentAreaProps) {
  return (
    <section className={styles.section}>
      {children}
    </section>
  )
}
