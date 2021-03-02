import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import HubContext from '../../context';
import LightInformation from '../../components/LightInformation';
import { setLightState, getLightInformation, setGroupState } from '../../utils/httpActions';

const SingleLight = ({ history, match: { params } }) => {
	const [control, setControl] = useState(null);
	const [colorSelected, setColorSelected] = useState(null);
	const { ipAddress, setBackNavigation, setHeaderTitle } = useContext(HubContext);
	const { groupId, lightId } = params;

	setBackNavigation('/groups');

	if (!ipAddress) {
		history.push('/');
		return null;
	}

	const handleSwitchChange = (light, state) => {
		setLightState(ipAddress, light, { on: state });
	};

	const handleColorChange = color => {
		setColorSelected(color);
	};

	useEffect(() => {
		if (colorSelected) {
			const timeoutId = setTimeout(() => {
				setGroupState(ipAddress, groupId, { hue: parseInt(colorSelected[0] * 65535), sat: parseInt(colorSelected[1] * 255), bri: parseInt(colorSelected[2] * 255) });
			}, 300);
			return () => {
				clearTimeout(timeoutId);
			};
		}
	}, [colorSelected]);

	useEffect(() => {
		let lightControl;
		getLightInformation(ipAddress, lightId).then(lightresponse => {
			const { name, state } = lightresponse;
			const { hue, sat, bri } = state;
			setHeaderTitle(name);
			lightControl = (<LightInformation
				lightName={name}
				isSwitchedOn={state.on}
				onSwitchChange={switchState => handleSwitchChange(lightId, switchState)}
				onColorChange={selectedColor => handleColorChange(selectedColor)}
				color={[hue / 65535, sat / 255, bri / 255]}
			/>);
			setControl(lightControl);
		})
			.catch(error => {
				console.log(error);
			});
	}, []);

	return control && control;
};

SingleLight.propTypes = {
	history: PropTypes.object,
	match: PropTypes.object,
};

export default SingleLight;