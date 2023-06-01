import styles from '@/styles/ToHaveClass.module.scss'

export default function ToHaveClass() {
  return (
    <>
      Checking for &ldquo;hidden&rdquo; class
      <div className={`${styles.hidden}`}>ToHaveClass</div>
    </>
  )
}
