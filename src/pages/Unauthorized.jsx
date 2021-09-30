import React from 'react'
import {FormattedMessage} from 'react-intl'
import {UndrawAlert} from 'react-undraw'
import styled from 'styled-components'

const Container = styled.div`
	text-align: center;
	padding: 30px;
	flex: 1;
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;
  h2 {
    text-transform: uppercase;
    color: #002d62;
    font-weight: bolder;
    margin-bottom: 30px;
  }
  p {
  	margin-top: 1rem;
  }
`

const Unauthorized = () => {

	return (
		<Container>
			<h2>
				<FormattedMessage id="general.labels.unauthorized_title"/>
			</h2>
			<UndrawAlert primaryColor="#002d62"/>
			<p><FormattedMessage id="general.labels.unauthorized_text"/></p>
		</Container>
	)
}

export default Unauthorized
