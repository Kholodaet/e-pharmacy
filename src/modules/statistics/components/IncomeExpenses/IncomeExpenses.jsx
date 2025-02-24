import { useSelector } from 'react-redux'

import { selectStatisticsIncomeExpenses } from '../../../../redux/Statistics/selectors'
import { getAmountStyle, getRowStyle } from './components/index'
import styles from './IncomeExpenses.module.scss'

const IncomeExpenses = () => {
	const statisticsIncomeExpenses = useSelector(selectStatisticsIncomeExpenses)

	return (
		<div className={styles.statisticsExpenses}>
			<h2>Income/Expenses</h2>
			<div className={styles.tableContainer}>
				<table className={styles.table}>
					<thead className={styles.tableHeader}>
						<tr>
							<th>Today</th>
						</tr>
					</thead>
					<tbody className={styles.tableBody}>
						{statisticsIncomeExpenses.map((row, index) => (
							<tr key={index}>
								<td>
									<div className={getRowStyle(row.type)}> {row.type}</div>
								</td>
								<td>{row.name}</td>
								<td>
									<a className={getAmountStyle(row.type)}>{row.amount >= 0 ? `${row.amount}` : row.amount}</a>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default IncomeExpenses
