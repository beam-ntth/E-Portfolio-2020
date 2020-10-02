import { useEffect } from 'react';

import Aos from 'aos';

const ProjCard = ( props ) => {
    const { name, link, tech } = props.proj;

    const goTo = () => {
        window.open( link );
    };

    useEffect( () => {
        Aos.init( { duration: 1200 } );
    } );

    return (
        <React.Fragment>
            <link href="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css" rel="stylesheet" />
            <div className={ `outer-card` } data-aos={ props.aos }>
                <div className='proj-name'>{ name }</div>
                <div className='sp-between'></div>
                <div className='proj-tech'>{ tech }</div>
                <div className='button' onClick={ goTo }>LEARN MORE</div>
            </div>
            <style jsx>
                {
                    `
                    .outer-card {
                        font-family: 'Montserrat', sans-serif;
                        width: 450px;
                        height: 200px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: flex-start;
                        border: 1px solid #04c2c9;
                        border-radius: 20px;
                        margin: 20px;
                        color: #444649;
                    }

                    .proj-name {
                        font-size: 20pt;
                        font-weight: 400;
                        padding: 20px 0px 10px 0px;
                    }

                    .sp-between {
                        flex: 1;
                    }

                    .proj-tech {
                        font-size: 12pt;
                        font-weight: 400;
                        padding 15px 0px;
                    }

                    .button {
                        font-size: 12pt;
                        padding: 10px 15px;
                        margin-bottom: 20px;
                        border: 1px solid #04c2c9;
                        cursor: pointer;
                        transition: 0.375s ease-in-out;
                    }

                    .button:hover {
                        color: white;
                        background-color: #e31b6d;
                        border-radius: 5px;
                        border: 1px solid #e31b6d;
                    }

                    // Small devices
                    @media (max-width: 576px) {
                        .outer-card {
                            width: 90%;
                        }

                        .proj-name {
                            font-size: 20px;
                        }

                        .proj-tech {
                            text-align: center;
                        }
                    }

                    // Medium devices (tablets, 768px and up)
                    @media (min-width: 576px) and (max-width: 768px) {
                    
                    }

                    // Large devices (desktops, 992px and up)
                    @media (min-width: 768px) and (max-width: 992px) {
                    
                    }
                    `
                }
            </style>
        </React.Fragment>
    );
};

export default ProjCard;
