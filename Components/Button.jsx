import styles from "../css/button.module.css"

export default function Button({text}) {
  return (
    <button className={styles.btn}>
        <h2>{text}</h2>
    </button>
  )
}