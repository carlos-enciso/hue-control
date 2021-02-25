import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import HubContext from '../../context/HubContext';
import GroupInformation from '../../components/GroupInformation';
import { getGroupsList, setGroupState } from '../../utils/httpActions';

const GroupList = () => {
	const [groupList, setGroupList] = useState(null);
	const { ipAddress } = useContext(HubContext);

	const handleSwitchChange = (group, state) => {
		setGroupState(ipAddress, group, { on: state });
	};

	useEffect(() => {
		let groupListFound = [];
		getGroupsList(ipAddress).then(response => {
			console.log(response);
			groupListFound = Object.keys(response).map(group => {
				const { name, state } = response[group];
				return (<GroupInformation groupName={name} isSwitchedOn={state.any_on || state.all_on} key={name} onSwitchChange={state => handleSwitchChange(group, state)} />);
			});
			setGroupList(groupListFound);
		})
			.catch(error => {
				console.log(error);
			});
	}, []);

	return groupList && groupList;
};

GroupList.propTypes = {
	hubName: PropTypes.string,
	macAddress: PropTypes.string,
	apiVersio: PropTypes.string,
};

export default GroupList;