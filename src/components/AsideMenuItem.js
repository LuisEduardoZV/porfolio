import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AsideMenuItem = ({ Icon, color, page, title, itsSiri = false, itsControl = false }) => {
	if (itsSiri) {
		return (
			<Link to="#" className="flex gap-x-5">
				<span className="h-8 w-8 rounded-md flex items-center justify-center p-0 m-0 -ml-0.5 bg-cover bg-no-repeat bg-top" style={{ backgroundImage: `url('${Icon}')` }}></span>
				<label className="cursor-pointer">Siri y Spotlight</label>
			</Link>
		);
	} else if (itsControl) {
		return (
			<Link to="#" className="flex gap-x-5">
				<span className="h-7 w-7 bg-gradient-to-t from-gray-icon-full to-gray-icon-low rounded-md flex items-center justify-center shadow">
					<span className="h-6 w-6" style={{ backgroundImage: `url('${Icon}')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} />
				</span>
				<label className="cursor-pointer">Centro de control</label>
			</Link>
		);
	} else {
		return (
			<Link to={page} className="flex gap-x-5">
				<span className={`h-7 w-7 ${color} rounded-md flex items-center justify-center shadow`}>
					<Icon className="h-6 w-6 text-white" />
				</span>
				<label className="cursor-pointer">{title}</label>
			</Link>
		);
	}
};

AsideMenuItem.propTypes = {
	Icon: PropTypes.node || PropTypes.string,
	color: PropTypes.string,
	page: PropTypes.string,
	title: PropTypes.string,
	itsSiri: PropTypes.bool,
	itsControl: PropTypes.bool,
};

export default AsideMenuItem;
