import styles from './StylesUtils.module.scss';

export const getRowStyle = (type) => {
  switch (type) {
    case 'Income':
      return styles.greenRow;
    case 'Expense':
      return styles.redRow;
    case 'Error':
      return styles.blackRow;
    default:
      return '';
  }
};

export const getAmountStyle = (type) => {
  switch (type) {
    case 'Income':
      return styles.positiveAmount;
    case 'Expense':
      return styles.negativeAmount;
    case 'Error':
      return styles.errorAmount;
    default:
      return '';
  }
};
