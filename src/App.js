import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Theme } from './theme';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { HubProvider } from './context/HubContext';
import HubList from './containers/HubList';
import SceneList from './containers/GroupList';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<MuiThemeProvider theme={Theme}>
				<div className="App">
					<HubProvider>
						<Switch>
							<Route exact path="/" component={HubList} />
							<Route exact path="/scenes" component={SceneList} />
						</Switch>
					</HubProvider>
				</div>
			</MuiThemeProvider>
		</BrowserRouter>
	);
}

export default App;
