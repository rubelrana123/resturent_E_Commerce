import PropTypes from "prop-types";

 

const Container = ({children}) => {
    return (
        <div className='w-11/12 lg:max-w-7xl m-auto'>
            {children}
        </div>
    );
};
Container.propTypes = {
    children: PropTypes.node.isRequired, // Ensures children can be any renderable content and is required
  };

export default Container;