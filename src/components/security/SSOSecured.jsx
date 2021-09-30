import React, {useState, useEffect} from 'react'
import Loading from '../../pages/Loading'
import Unauthorized from '../../pages/Unauthorized'

const SSOSecured = ({client, claim, force, children}) => {
	const [authorized, setAuthorized] = useState(null)
	useEffect(() => {
		client.checkClaim(claim, !!force)
			.then(authorization => setAuthorized(authorization))
			.catch(() => setAuthorized(false))
	}, [claim])

	if (authorized === null) return (
		<Loading />
	)
	return authorized
		? <>{children}</>
		: <div className="page-body">
			<Unauthorized/>
	</div>

}

export default SSOSecured
