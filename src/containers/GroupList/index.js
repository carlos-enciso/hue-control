import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import HubContext from '../../context/HubContext';
import GroupInformation from '../../components/GroupInformation';
import { getGroupsList, setGroupState } from '../../utils/httpActions';

const GroupList = ({ history }) => {
	const [groupList, setGroupList] = useState(null);
	const { ipAddress, setBackNavigation, setHeaderTitle } = useContext(HubContext);

	if (!ipAddress) {
		history.push('/');
		return null;
	}

	setBackNavigation('/');
	setHeaderTitle('Groups');

	const handleSwitchChange = (group, state) => {
		setGroupState(ipAddress, group, { on: state });
	};

	const handleSelectGroup = group => {
		history.push(`/lights/${group}`);
	};

	useEffect(() => {
		let groupListFound = [];
		getGroupsList(ipAddress).then(response => {
			groupListFound = Object.keys(response).map(group => {
				const { name, state } = response[group];
				return (
					<GroupInformation
						key={name}
						groupName={name}
						groupClass={response[group].class}
						isSwitchedOn={state.any_on || state.all_on}
						onSwitchChange={switchState => handleSwitchChange(group, switchState)}
						onClick={() => handleSelectGroup(group)}
					/>);
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
	history: PropTypes.object,
};

export default GroupList;