import React from 'react'
import {FormattedMessage} from 'react-intl'
import rocket from '../assets/images/rocket.gif'

const Loading = () => {
	return (<div className="page-body d-flex justify-content-center align-items-center bg-white">
		<div className="text-center text-muted">
			<img
				src={rocket}
				alt="A loading spinner"
				style={{
					width: '200px',
					height: '200px'
				}}
			/>
		</div>
	</div>)
}

export default Loading
