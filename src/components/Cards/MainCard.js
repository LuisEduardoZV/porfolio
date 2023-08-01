import PropTypes from 'prop-types';

const MainCard = ({ children }) => {
	return <section className="w-full h-full flex flex-col px-10 overflow-y-auto">{children}</section>;
};

MainCard.propTypes = {
	children: PropTypes.node,
};

export default MainCard;
