import React from 'react';
import { Navbar } from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import TodosPage from './pages/TodosPage';
// import AboutPage from './pages/AboutPage';

const App: React.FC = () => {
	return (
		<>
			<Navbar />
			<div className='container'>
				<Switch>
					<Route exact path='/' component={TodosPage} />
					{/* <Route path='/info' component={AboutPage} /> */}
				</Switch>
			</div>
		</>
	);
};

export default App;
