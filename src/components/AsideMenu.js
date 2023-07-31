import { useEffect } from 'react';
import { Link } from 'react-router-dom';

//assets
import { IconAccessible, IconAddressBook, IconBellFilled, IconBluetooth, IconBrowser, IconContrast, IconHandStop, IconHourglassHigh, IconMoonFilled, IconSchool, IconSettings, IconVolume, IconWifi, IconWorldWww } from '@tabler/icons-react';
import IconControl from '../assets/icons/Control.svg';
import IconSiri from '../assets/icons/Siri.png';

const menuItems = [
	{ Icon: IconSettings, color: 'bg-gradient-to-t from-gray-icon-full to-gray-icon-low', page: 'config', title: 'Ajustes' },
	{ Icon: IconSchool, color: 'bg-gradient-to-t from-green-icon-full to-green-icon-low', page: 'school', title: 'Escolaridad' },
	{ Icon: IconBrowser, color: 'bg-gradient-to-t from-blue-icon-full to-blue-icon-low', page: 'projects', title: 'Proyectos' },
	{ Icon: IconAddressBook, color: 'bg-gradient-to-t from-light-blue-icon-full to-light-blue-icon-low', page: 'contact', title: 'Contacto' },
];

const AsideMenu = ({ path }) => {
	useEffect(() => {}, [path]);

	return (
		<aside className="flex flex-col w-1/6 h-full min-h-screen bg-bg-200  px-5 gap-y-3 text-gray-text">
			<div className="w-full h-fit py-5 flex flex-row justify-start gap-x-3">
				<span className="h-4 w-4 bg-red-window rounded-full"></span>
				<span className="h-4 w-4 bg-yellow-window rounded-full"></span>
				<span className="h-4 w-4 bg-green-window rounded-full"></span>
			</div>
			<section className="flex flex-col gap-y-3 w-full h-fit">
				<Link to="" className="flex w-full h-fit gap-x-5 items-center mb-5">
					<div className="bg-profile h-16 w-16 bg-no-repeat bg-top bg-cover rounded-full"></div>
					<div className="flex flex-col">
						<label className="font-bold">Luis E. Zúñiga V.</label>
						<span>Front End Developer</span>
					</div>
				</Link>
				<Link to="config" className="flex gap-x-5">
					<span className="h-7 w-7 bg-gradient-to-t from-gray-icon-full to-gray-icon-low rounded-md flex items-center justify-center shadow">
						<IconSettings className="h-6 w-6 text-white" />
					</span>
					<label className="cursor-pointer">Ajustes</label>
				</Link>
				<Link to="school" className="flex gap-x-5">
					<span className="h-7 w-7 bg-gradient-to-t from-green-icon-full to-green-icon-low rounded-md flex items-center justify-center shadow">
						<IconSchool className="h-6 w-6 text-white" />
					</span>
					<label className="cursor-pointer">Escolaridad</label>
				</Link>
				<Link to="proyectos" className="flex gap-x-5">
					<span className="h-7 w-7 bg-gradient-to-t from-blue-icon-full to-blue-icon-low rounded-md flex items-center justify-center shadow">
						<IconBrowser className="h-6 w-6 text-white" />
					</span>
					<label className="cursor-pointer">Proyectos</label>
				</Link>
				<Link to="contact" className="flex gap-x-5">
					<span className="h-7 w-7 bg-gradient-to-t from-light-blue-icon-full to-light-blue-icon-low rounded-md flex items-center justify-center shadow">
						<IconAddressBook className="h-6 w-6 text-white" />
					</span>
					<label className="cursor-pointer">Contácto</label>
				</Link>
				<div className="bg-bg-100 w-full h-[0.05rem] my-2" />
				<section className="flex flex-col w-full h-fit gap-y-10">
					<div className="flex flex-col w-full h-fit gap-y-2">
						<Link to="#" className="flex gap-x-5">
							<span className="h-7 w-7 bg-gradient-to-t from-blue-icon-full to-blue-icon-low rounded-md flex items-center justify-center shadow">
								<IconWifi className="h-6 w-6 text-white" />
							</span>
							<label className="cursor-pointer">Wi-Fi</label>
						</Link>
						<Link to="#" className="flex gap-x-5">
							<span className="h-7 w-7 bg-gradient-to-t from-blue-icon-full to-blue-icon-low rounded-md flex items-center justify-center shadow">
								<IconBluetooth className="h-6 w-6 text-white" />
							</span>
							<label className="cursor-pointer">Bluetooth</label>
						</Link>
						<Link to="#" className="flex gap-x-5">
							<span className="h-7 w-7 bg-gradient-to-t from-blue-icon-full to-blue-icon-low rounded-md flex items-center justify-center shadow">
								<IconWorldWww className="h-6 w-6 text-white" />
							</span>
							<label className="cursor-pointer">Red</label>
						</Link>
					</div>
					<div className="flex flex-col w-full h-fit gap-y-3">
						<Link to="#" className="flex gap-x-5">
							<span className="h-7 w-7 bg-gradient-to-t from-orange-icon-full to-orange-icon-low rounded-md flex items-center justify-center shadow">
								<IconBellFilled className="h-6 w-6 text-white" />
							</span>
							<label className="cursor-pointer">Notificaciones</label>
						</Link>
						<Link to="#" className="flex gap-x-5">
							<span className="h-7 w-7 bg-gradient-to-t from-red-icon-full to-red-icon-low rounded-md flex items-center justify-center shadow">
								<IconVolume className="h-6 w-6 text-white" />
							</span>
							<label className="cursor-pointer">Sonido</label>
						</Link>
						<Link to="#" className="flex gap-x-5">
							<span className="h-7 w-7 bg-gradient-to-t from-purple-icon-full to-purple-icon-low rounded-md flex items-center justify-center shadow">
								<IconMoonFilled className="h-6 w-6 text-white" />
							</span>
							<label className="cursor-pointer">Enfoque</label>
						</Link>
						<Link to="#" className="flex gap-x-5">
							<span className="h-7 w-7 bg-gradient-to-t from-purple-icon-full to-purple-icon-low rounded-md flex items-center justify-center shadow">
								<IconHourglassHigh className="h-6 w-6 text-white" />
							</span>
							<label className="cursor-pointer">Tiempo en pantalla</label>
						</Link>
					</div>
					<div className="flex flex-col w-full h-fit gap-y-3">
						<Link to="#" className="flex gap-x-5">
							<span className="h-7 w-7 bg-black rounded-md flex items-center justify-center shadow">
								<IconContrast className="h-6 w-6 text-white" />
							</span>
							<label className="cursor-pointer">Aspecto</label>
						</Link>
						<Link to="#" className="flex gap-x-5">
							<span className="h-7 w-7 bg-gradient-to-t from-blue-icon-full to-blue-icon-low rounded-md flex items-center justify-center shadow">
								<IconAccessible className="h-6 w-6 text-white" />
							</span>
							<label className="cursor-pointer">Accesibilidad</label>
						</Link>
						<Link to="#" className="flex gap-x-5">
							<span className="h-7 w-7 bg-gradient-to-t from-gray-icon-full to-gray-icon-low rounded-md flex items-center justify-center shadow">
								<span className="h-6 w-6" style={{ backgroundImage: `url('${IconControl}')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} />
							</span>
							<label className="cursor-pointer">Centro de control</label>
						</Link>
						<Link to="#" className="flex gap-x-5">
							<span className="h-8 w-8 rounded-md flex items-center justify-center p-0 m-0 -ml-0.5 bg-cover bg-no-repeat bg-top" style={{ backgroundImage: `url('${IconSiri}')` }}></span>
							<label className="cursor-pointer">Siri y Spotlight</label>
						</Link>
						<Link to="#" className="flex gap-x-5">
							<span className="h-7 w-7 bg-gradient-to-t from-blue-icon-full to-blue-icon-low rounded-md flex items-center justify-center shadow">
								<IconHandStop className="h-6 w-6 text-white" />
							</span>
							<label className="cursor-pointer">Privacidad y seguridad</label>
						</Link>
					</div>
				</section>
			</section>
		</aside>
	);
};

export default AsideMenu;
