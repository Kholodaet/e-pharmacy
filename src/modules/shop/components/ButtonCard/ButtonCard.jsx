import styles from './ButtonCard.module.scss'
const ButtonCard = ({ children, isStyle, ...rest}) => {
  return (
    <button className={ isStyle ? styles.buttonShopSecondary : styles.buttonShop} {...rest}>
      {children}
    </button>
  )
}

export default ButtonCard