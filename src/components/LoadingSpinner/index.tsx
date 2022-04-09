import styles from './LoadingSpinner.module.scss'

export default function LoadingSpinner() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/loading.svg" className={styles.spinner} alt="" role="presentation" />
  )
}
