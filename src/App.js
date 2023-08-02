import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AsideMenu from './components/AsideMenu';
import useConfig from './hooks/useConfig';

//<FormattedMessage id="tittle" />
const App = () => {
	const { theme, accent } = useConfig();
	const { pathname } = useLocation();

	const [path, setPath] = useState('');

	useEffect(() => {
		setPath(pathname.slice(1, pathname.length));
	}, [pathname]);

	return (
		<main className={`${theme} ${accent} min-h-screen flex flex-row bg-main-fondo bg-cover bg-center bg-no-repeat`}>
			<AsideMenu path={path} />
			<section className="flex w-5/6 h-full min-h-screen bg-bg-100">
				<Outlet />
			</section>
		</main>
	);
};

export default App;
