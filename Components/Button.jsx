import styles from "../css/button.module.css"

export default function Button({text}) {
  return (
    <button className={styles.btn}>
        <h3>{text}</h3>
    </button>
  )
}