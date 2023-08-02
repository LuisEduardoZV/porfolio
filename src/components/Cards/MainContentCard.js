import PropTypes from 'prop-types';
import useConfig from '../../hooks/useConfig';

const MainContentCard = ({ children, opacity = 'opacity-100', hight = 'h-fit' }) => {
	const { font } = useConfig();

	return <article className={`w-full ${hight} flex flex-col my-4 bg-bg-200 rounded-2xl border ${opacity} border-main-border items-center p-3 text-main-text ${font ? 'font-normal' : 'font-bold'} transition-all duration-100 ease-linear`}>{children}</article>;
};

MainContentCard.propTypes = {
	children: PropTypes.node,
	opacity: PropTypes.string,
};

export default MainContentCard;
