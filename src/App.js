import { Outlet, useLocation } from 'react-router-dom';
import AsideMenu from './components/AsideMenu';
import useConfig from './hooks/useConfig';

//<FormattedMessage id="tittle" />
const App = () => {
	const { theme } = useConfig();
	const { pathname } = useLocation();

	return (
		<main className={`${theme} min-h-screen flex flex-row bg-yellow-500`}>
			<AsideMenu path={pathname} />
			<section className="flex w-5/6 h-full min-h-screen bg-bg-100">
				<Outlet />
			</section>
		</main>
	);
};

export default App;
