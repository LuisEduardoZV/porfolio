import PropTypes from 'prop-types';

const Divider = ({ width = 'w-full' }) => {
	return <div className={`bg-main-border ${width} h-[0.05rem] my-2`} />;
};

Divider.propTypes = {
	width: PropTypes.string,
};

export default Divider;
