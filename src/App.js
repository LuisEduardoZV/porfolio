import { Outlet } from 'react-router-dom';

const App = () => {
	return (
		<main className="w-full h-full min-h-screen bg-bg-100">
			Hello world!
			<Outlet />
		</main>
	);
};

export default App;
