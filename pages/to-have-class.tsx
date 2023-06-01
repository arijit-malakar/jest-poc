import styles from '@/styles/ToHaveClass.module.scss'

export default function ToHaveClass() {
  return (
    <>
      Checking for "hidden" class
      <div className={`${styles.hidden}`}>ToHaveClass</div>
    </>
  )
}
