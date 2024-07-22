import styles from "../css/button.module.css"

export default function Button({text}) {
  return (
    <div className={styles.btn}>
        <h2>{text}</h2>
    </div>
  )
}