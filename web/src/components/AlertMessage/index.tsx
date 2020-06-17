//imports
import React from 'react';

import './styles.css';

//typescript interfaces
interface Props {
    status: Boolean;
}

//component
const AlertMessage: React.FC<Props> = ({ status }) => {
    return status && (
        <div className="container">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                    d="M58.6668 29.5466V32C58.6636 37.7504 56.8015 43.3458 53.3584 47.9515C49.9153 52.5572 45.0756 55.9266 39.5611 57.557C34.0466 59.1875 28.1529 58.9917 22.7588 56.9989C17.3646 55.006 12.7592 51.3229 9.62939 46.4988C6.49954 41.6747 5.01294 35.9682 5.3913 30.2302C5.76966 24.4922 7.99271 19.0302 11.7289 14.6588C15.4651 10.2875 20.5143 7.241 26.1233 5.97371C31.7324 4.70641 37.6009 5.28622 42.8535 7.62665"
                    stroke="#34CB79"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"/>
                <path 
                    d="M58.6667 10.6667L32 37.36L24 29.36"
                    stroke="#34CB79"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"/>
            </svg>
            <p className="msg" >Cadastro concluído!</p>
        </div>
    )
}

export default AlertMessage;