import React from 'react';
import AppRoutes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import '../../styles/main.scss';
import createStore from '../../stores';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

class App extends React.Component {
	render() {
		return (
			<Provider store={createStore(window.REDUX_DATA)}>
				<Router>
					<div className="app">
						<div className="content">
							<Navigation />
							{AppRoutes}
							<Footer />
						</div>
					</div>
				</Router>
			</Provider>
	  );
	}
}
export default App;
