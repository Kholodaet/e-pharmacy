import { useSelector } from 'react-redux'
import { useState } from 'react';

import { selectStatisticsCustomer } from '../../../../redux/Statistics/selectors'
import TableButton from './components/Button/TableButton'
import ClientModal from './components/ClientModal/ClientModal';
import Modal from '../../../../shared/components/Modal/Modal';
import useModal from '../../../../hooks/useModal';
import styles from './RecentCustomers.module.scss'


const RecentCustomers = () => {
	const [isOpen, toggleModal] = useModal()
	const [selectedClient, setSelectedClient] = useState(null);
	const headers = ['Name', 'Email', 'Spent', 'Medicine']
	const statisticsCustomer = useSelector(selectStatisticsCustomer)

	const clickOneClient = (client) => {
    setSelectedClient(client); 
		toggleModal();
  };

	return (
		<div className={styles.recentCustomers}  >
			<h2>Recent Customers</h2>
			<div className={styles.tableContainer}>
			<table className={styles.table}>
				<thead className={styles.tableHeader}>
					<tr>
						{headers.map((item, index) => (
							<th key={index}>{item}</th>
						))}
					</tr>
				</thead>
				<tbody className={styles.tableBody}>
					{statisticsCustomer.map((row, index) => (
						<tr key={index}>
							<td>{row.name}</td>
							<td>{row.email}</td>
							<td>{row.spent}</td>
							<td><TableButton onClick={() => clickOneClient(row)}/></td>
						</tr>
					))}
				</tbody>
			</table>
			</div>
			{isOpen && (
				<Modal onClose={toggleModal}>
				<ClientModal client={selectedClient} onClose={toggleModal}/>
			</Modal>)}
		</div>
	)
}

export default RecentCustomers
