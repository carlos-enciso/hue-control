import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography } from '@material-ui/core/';

const HubInformationComponent = ({ hubName, macAddress, apiVersion, ipAddress }) => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<img src={`https://${ipAddress}//hue_logo_3.png`} alt="hueLogo" />
			<div>
				<Typography variant="h1">{hubName}</Typography>
				<Typography variant="h2">{macAddress}</Typography>
				<Typography variant="caption">{apiVersion}</Typography>
			</div>
		</div>
	);
};

HubInformationComponent.propTypes = {
	hubName: PropTypes.string,
	macAddress: PropTypes.string,
	apiVersion: PropTypes.string,
	ipAddress: PropTypes.string,
};

const useStyles = makeStyles({
	container: {
		display: 'flex',
		padding: '1rem',
		border: '1px',
		borderColor: 'black',
	},
});

export default HubInformationComponent;