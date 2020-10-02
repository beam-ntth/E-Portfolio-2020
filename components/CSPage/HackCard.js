import { useEffect } from 'react';

import Aos from 'aos';

const HackCard = ( props ) => {
    const { name, place, image, link, tech } = props.hack;
    const goTo = () => {
        window.open( link );
    };

    useEffect( () => {
        Aos.init( { duration: 1200 } );
    } );

    return (
        <React.Fragment>
            <link href="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css" rel="stylesheet" />
            <div className={ `card-outer` } data-aos={ props.aos }>
                <div className='hack-card'>
                    <h3 className='proj-name'>{ name }</h3>
                    <h3 className='proj-place'> { place } </h3>
                    <div className='sp-between'></div>
                    <h4> { tech } </h4>
                    <div className='button' onClick={ goTo }>LEARN MORE</div>
                </div>
            </div>
            <style jsx>
                {
                    `
                    .card-outer {
                        width: 500px;
                        height: 250px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 20px;
                        border-radius: 5px;
                        background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${ image });
                        background-size: 500px 250px;
                        background-repeat: no-repeat;
                        transition: background-image 1s ease-in;
                    }

                    .card-outer:hover {
                        background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${ image });
                    }

                    .hack-card {
                        font-family: 'Montserrat', sans-serif;
                        height: 100%;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: flex-start;
                        color: white;
                    }

                    .hack-card h3 {
                        font-weight: 400;
                    }

                    .proj-name {
                        font-size: 20pt;
                        margin: 25px 0px 0px 0px;
                    }

                    .proj-place {
                        font-size: 14pt;
                        margin: 10px 0px 10px 0px;
                    }

                    .sp-between {
                        flex: 1;
                    }

                    .button {
                        margin: 5px 0px 25px 0px;
                        padding: 10px 15px;
                        background-color: white;
                        border: 2px solid gray;
                        color: gray;
                        cursor: pointer;
                        transition: 0.375s ease-in-out;
                    }

                    .button:hover {
                        background-color: #04c2c9;
                        border: 2px solid #04c2c9;
                        border-radius: 5px;
                        color: white;
                    }

                    // Small devices
                    @media (max-width: 576px) {
                        .card-outer {
                            width: 95%;
                        }

                        .proj-name {
                            font-size: 20px;
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

export default HackCard;
