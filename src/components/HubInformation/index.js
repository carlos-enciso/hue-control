import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography } from '@material-ui/core/';

const HubInformationComponent = ({ hubName, macAddress, apiVersion, ipAddress, onClick }) => {
	const classes = useStyles();

	return (
		<div className={classes.container} onClick={onClick}>
			<img src={`https://${ipAddress}//hue_logo_3.png`} alt="hueLogo" />
			<div className={classes.information}>
				<Typography variant="h1">{hubName}</Typography>
				<Typography variant="h2">{macAddress}</Typography>
				<Typography variant="caption">Version: {apiVersion}</Typography>
			</div>
		</div>
	);
};

HubInformationComponent.propTypes = {
	hubName: PropTypes.string,
	macAddress: PropTypes.string,
	apiVersion: PropTypes.string,
	ipAddress: PropTypes.string,
	onClick: PropTypes.func,
};

const useStyles = makeStyles({
	container: {
		display: 'flex',
		padding: '1rem',
		border: '2px solid black',
		cursor: 'pointer',
	},
	information: {
		display: 'flex',
		flexDirection: 'column',
		padding: '0.5rem',
		justifyContent: 'space-around',
	},
});

export default HubInformationComponent;