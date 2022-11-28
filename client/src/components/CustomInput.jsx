import React from 'react'

import styles from '../styles';

const regex = /^[A-Za-z0-9]+$/; 

const CustomInput = ({label, placeholder, value, handleValueChange}) => {
	return (
		<>
			<label htmlFor="name" className={styles.label}>
				{label}
			</label>
		</>
	)
}

export default CustomInput