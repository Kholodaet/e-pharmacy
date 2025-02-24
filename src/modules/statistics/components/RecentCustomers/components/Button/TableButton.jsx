import styles from './TableButton.module.scss'
const TableButton = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>View</button>
  )
}

export default TableButton