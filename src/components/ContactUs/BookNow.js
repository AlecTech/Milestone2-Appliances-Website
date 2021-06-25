import React from "react";
import "./BookNow.css";
import logo from "./Images/polarGIF.gif";

function ActionLink() {
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }
  
    return (
        <div className="container">
            <a href="#" class="btn" onClick={handleClick}> Book Now </a>       
            
            <img src={logo} height="200" ></img>      
        </div>
    );
  }

  export default ActionLink;

// import React from 'react';
// import PropTypes from 'prop-types';

// import './buttonStyles.css';

// const Button = ({value, onClick}) => (
//     <button
//         className='app-button'
//         onClick={(event) => onClick(event)}>
//         {value}
//     </button>
// );

// Button.propTypes = {
//     styleClass: PropTypes.string,
//   value: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired
// };

// Button.defaultProps = {
//     styleClass: 'btn-primary'
// };

// export default Button;