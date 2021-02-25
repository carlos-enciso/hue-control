import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles, Typography, Switch } from '@material-ui/core/';

const AntSwitch = withStyles((theme) => ({
	root: {
		width: 98,
		height: 36,
		padding: 2,
		display: 'flex',
	},
	switchBase: {
		padding: 4,
		color: theme.palette.grey[500],
		'&$checked': {
			transform: 'translateX(60px)',
			color: theme.palette.common.white,
			'& + $track': {
				opacity: 1,
				backgroundColor: theme.palette.primary.main,
				borderColor: theme.palette.primary.main,
			},
		},
	},
	thumb: {
		width: 30,
		height: 30,
		boxShadow: 'none',
	},
	track: {
		border: `1px solid ${theme.palette.grey[500]}`,
		borderRadius: 32 / 2,
		opacity: 1,
		backgroundColor: theme.palette.common.white,
	},
	checked: {},
}))(Switch);

const SceneInformationComponent = ({ groupName, isSwitchedOn, onSwitchChange }) => {
	const classes = useStyles();
	const [isChecked, setIsChecked] = React.useState(isSwitchedOn);

	const handleChange = event => {
		setIsChecked(event.target.checked);
		onSwitchChange(event.target.checked);
	};

	return (
		<div className={classes.container}>
			<Typography variant="h1">{groupName}</Typography>
			<AntSwitch checked={isChecked} onChange={handleChange} />
		</div>
	);
};

SceneInformationComponent.propTypes = {
	groupName: PropTypes.string,
	isSwitchedOn: PropTypes.bool,
	onSwitchChange: PropTypes.func,
};

const useStyles = makeStyles({
	container: {
		display: 'flex',
		padding: '1rem',
		margin: '1rem',
		border: '2px solid black',
		justifyContent: 'space-between',
	},
});

export default SceneInformationComponent;