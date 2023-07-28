import { IconSettings } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const AsideMenu = () => {
	return (
		<aside className="flex flex-col w-1/6 h-full min-h-screen bg-bg-200 px-5 gap-y-3">
			<div className="w-full h-fit py-5 flex flex-row justify-start gap-x-3">
				<span className="h-4 w-4 bg-red rounded-full"></span>
				<span className="h-4 w-4 bg-yellow rounded-full"></span>
				<span className="h-4 w-4 bg-green rounded-full"></span>
			</div>
			<section className="flex flex-col gap-y-5 w-full h-fit">
				<Link to="" className="flex w-full h-fit gap-x-5 items-center mb-5">
					<div className="bg-profile h-16 w-16 bg-no-repeat bg-top bg-cover rounded-full"></div>
					<div className="flex flex-col">
						<label className="font-semibold">Luis E. Zúñiga V.</label>
						<span>Front End Developer</span>
					</div>
				</Link>
				<Link to="config" className="flex gap-x-5">
					<span className="h-7 w-7 bg-gradient-to-t from-gray-500 to-gray-400 rounded flex items-center justify-center">
						<IconSettings className="h-6 w-6 text-white" />
					</span>
					<label>Ajustes</label>
				</Link>
				<Link to="school" className="flex gap-x-5">
					<span className="h-7 w-7 bg-blue-400 rounded"></span>
					<label>Escolaridad</label>
				</Link>
				<Link to="proyectos" className="flex gap-x-5">
					<span className="h-7 w-7 bg-blue-400 rounded"></span>
					<label>Proyectos</label>
				</Link>
				<Link to="contact" className="flex gap-x-5">
					<span className="h-7 w-7 bg-blue-400 rounded"></span>
					<label>Contácto</label>
				</Link>
			</section>
		</aside>
	);
};

export default AsideMenu;
