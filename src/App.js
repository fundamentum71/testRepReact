import React from 'react';
import './App.css';

const Header = () => {
	return <h2>HEllo World</h2>;
};

//const Field = () => {
//	const holder = 'Enter here';
//	const styleField = {
//		width: '300px',
//	};
//	return <input placeholder={holder} type="text" style={styleField} />;
//};

//тот же Field только при помощи классового подхода
class Field extends React.Component {
	render() {
		const holder = 'Enter here';
		const styleField = {
			width: '300px',
		};

		return <input placeholder={holder} type="text" style={styleField} />;
	}
}

function Btn() {
	const text = 'Log In';
	const logged = false;

	return <button>{}</button>;
}

function App() {
	return (
		<div className="App">
			<Header />
			<Field />
			<Btn />
		</div>
	);
}

export { Header };
export default App;
