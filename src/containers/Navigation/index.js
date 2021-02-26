import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { makeStyles, Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import HubContext from '../../context/HubContext';

const Navigation = ({ children }) => {
	const { backNavigation, headerTitle } = useContext(HubContext);
	const classes = useStyles();
	const history = useHistory();

	const handleBackNavigation = () => {
		history.push(backNavigation);
	};

	return (
		<div className={classes.wrapper}>
			<div className={classes.header}>
				<Button onClick={handleBackNavigation} className={classes.backButton}>
					<ArrowBackIosIcon />
				</Button>
				<div className={classes.title}>
					<Typography variant="h1">
						{headerTitle}
					</Typography>
				</div>
			</div>
			<div className={classes.container}>
				{children}
			</div>
		</div>
	);
};

Navigation.propTypes = {
	history: PropTypes.object,
	children: PropTypes.oneOf(PropTypes.object, PropTypes.array),
};

const useStyles = makeStyles({
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
	},
	container: {
		flex: 1,
	},
	title: {
		display: 'flex',
		padding: '1rem',
		margin: '1rem',
	},
	header: {
		display: 'flex',
	},
	backButton: {
		cursor: 'pointer',
		alignSelf: 'center',
	}
});

export default Navigation;