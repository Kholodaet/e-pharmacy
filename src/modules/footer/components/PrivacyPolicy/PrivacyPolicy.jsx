import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { selectPrivatePolicy, selectPublicTerms } from '@redux/PrivatePolicy/selectors'
import { fetchPrivatePolicy, fetchPublicTerms } from '@redux/PrivatePolicy/operations'
import useModal from '@hooks/useModal'
import Modal from '@shared/components/Modal'
import styles from './PrivacyPolicy.module.scss'
import ModalContent from './ModalContent'

const PrivacyPolicy = () => {
	const dispatch = useDispatch()
	const [isPrivacyOpen, togglePrivacyModal] = useModal()
	const [isTermsOpen, toggleTermsModal] = useModal()

	const privatePolicy = useSelector(selectPrivatePolicy)
	const publicTerms = useSelector(selectPublicTerms)

	useEffect(() => {
		dispatch(fetchPrivatePolicy())
		dispatch(fetchPublicTerms())
	}, [dispatch])

	return (
		<div className={styles.policyBox}>
			<span>© E-Pharmacy 2023. All Rights Reserved</span>
			<Link to='#' onClick={togglePrivacyModal}>
				Privacy Policy
			</Link>
			<Link to='#' onClick={toggleTermsModal}>
				Terms & Conditions
			</Link>
			{isPrivacyOpen && (
				<Modal onClose={togglePrivacyModal}>
					<ModalContent title='Privacy Policy' content={privatePolicy} onClose={togglePrivacyModal} />
				</Modal>
			)}
			{isTermsOpen && (
				<Modal onClose={toggleTermsModal}>
					<ModalContent title='Terms & Conditions' content={publicTerms} onClose={toggleTermsModal} />
				</Modal>
			)}
		</div>
	)
}

export default PrivacyPolicy
