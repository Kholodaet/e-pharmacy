import CloseButton from '../../../../../../shared/components/CloseButton/CloseButton'
import styles from './ClientModal.module.scss'

const ClientModal = ({ client, onClose }) => {
	const headers = ['Name', 'Email', 'Spent']
	return (
		<div className={styles.clientModal}>
			<CloseButton onClose={onClose} />
			<h3 className={styles.modalTitle}>The client`s goods</h3>
			<table className={styles.table}>
				<thead className={styles.modalThead}>
					<tr className={styles.headerRow}>
						<th className={styles.headerCell}>
							{headers[0]}
							<span>{client?.name}</span>
						</th>
						<th className={styles.headerCell}>
							{headers[1]} 
              <span>{client?.email}</span>
						</th>
						<th className={styles.headerCell}>
							{headers[2]}
               <span>{client?.spent}</span>
						</th>
					</tr>
				</thead>
				<tbody className={styles.tableBody}>
					<tr className={styles.tableRow}>
						<td className={styles.tableCell}>
							<span>Hello. All your purchases are displayed here. You have not made any purchases yet.</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default ClientModal
