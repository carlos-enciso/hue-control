import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import HubContext from '../../context/HubContext';
import GroupInformation from '../../components/GroupInformation';
import LightInformation from '../../components/LightInformation';
import { getGroupInformation, setLightState, getLightInformation, setGroupState } from '../../utils/httpActions';

const LightList = ({ history, match: { params } }) => {
	const [lightList, setLightList] = useState(null);
	const [control, setControl] = useState(null);
	const [colorSelected, setColorSelected] = useState(null);
	const { ipAddress, setBackNavigation, setHeaderTitle } = useContext(HubContext);
	const { groupId } = params;

	if (!ipAddress) {
		history.push('/');
		return null;
	}

	setBackNavigation('/groups');
	setHeaderTitle('Lights');

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
		const lightListFound = [];
		let lightControl;
		getGroupInformation(ipAddress, groupId).then(response => {
			if (response.lights && response.lights.length > 1) {
				response.lights.forEach(light => {
					getLightInformation(ipAddress, light).then(lighResponse => {
						const { name, state } = lighResponse;
						lightListFound.push(
							<GroupInformation
								key={name}
								groupName={name}
								groupClass="Bulb Classic"
								isSwitchedOn={state.on}
								onSwitchChange={switchState => handleSwitchChange(light, switchState)}
							/>);
						setLightList(lightListFound);
					});
				});
			} else {
				const light = response.lights[0];
				getLightInformation(ipAddress, light).then(lightresponse => {
					const { name, state } = lightresponse;
					const { hue, sat, bri } = state;
					setHeaderTitle(name);
					lightControl = (<LightInformation
						lightName={name}
						isSwitchedOn={state.on}
						onSwitchChange={switchState => handleSwitchChange(light, switchState)}
						onColorChange={selectedColor => handleColorChange(selectedColor)}
						color={[hue / 65535, sat / 255, bri / 255]}
					/>);
					setControl(lightControl);
				});
			}
		})
			.catch(error => {
				console.log(error);
			});
	}, []);

	return (
		<>
			{lightList && lightList}
			{control && control}
		</>
	);
};

LightList.propTypes = {
	history: PropTypes.object,
	match: PropTypes.object,
};

export default LightList;