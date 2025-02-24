import clsx from 'clsx'

import { StatisticsBox } from './components/StatisticsBox'
import { RecentCustomers } from './components/RecentCustomers'
import { IncomeExpenses } from './components/IncomeExpenses'
import styles from './Statistics.module.scss'
import '../../styles/_container.scss'

const Statistics = () => {
	return (
		<section className={clsx(styles.statisticsSection, 'container')}>
			<h1 className={styles.statisticsTitle}>Statistics</h1>
			<StatisticsBox />
			<div className={styles.customersExpensesSection}>
				<RecentCustomers />
				<IncomeExpenses />
			</div>
		</section>
	)
}

export default Statistics
