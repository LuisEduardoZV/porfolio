import PropTypes from 'prop-types';
import useConfig from '../../hooks/useConfig';

const MainContentCard = ({ children }) => {
	const { font } = useConfig();

	return <article className={`w-full h-fit flex flex-col mt-4 bg-bg-200 rounded-2xl border border-main-border items-center p-3 text-main-text ${font ? 'font-normal' : 'font-bold'}`}>{children}</article>;
};

MainContentCard.propTypes = {
	children: PropTypes.node,
};

export default MainContentCard;
