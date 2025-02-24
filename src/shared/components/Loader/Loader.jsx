import { Watch } from 'react-loader-spinner'
import styles from './Loader.module.scss'

const Loader = () => {
	return (
		<div className={styles.loader}>
			<Watch
				visible={true}
				height='80'
				width='80'
				radius='48'
				color='#4fa94d'
				ariaLabel='watch-loading'
				wrapperStyle={{}}
				wrapperClass=''
			/>
		</div>
	)
}

export default Loader
