import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Theme } from './theme';
import HubList from './containers/HubList';
import './App.css';

function App() {
	return (
		<MuiThemeProvider theme={Theme}>
			<div className="App">
				<HubList />
			</div>
		</MuiThemeProvider>
	);
}

export default App;
