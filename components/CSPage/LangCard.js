import { useEffect } from 'react';

import Link from "next/link";

import Aos from 'aos';


const LangCard = ( props ) => {

    const { name, link } = props.lang;

    useEffect( () => {
        Aos.init( { duration: 1200 } );
    } );

    return (
        <React.Fragment>
            <link href="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css" rel="stylesheet" />
            <div className={ `outer-card` } data-aos={ props.aos }>
                <div className='proj-name'>{ name }</div>
                <div className='sp-between'></div>
                <Link href={ link }><a className='button'>LEARN MORE</a></Link>
            </div>
            <style jsx>
                {
                    `
                    .outer-card {
                        font-family: 'Montserrat', sans-serif;
                        width: 350px;
                        height: 150px;
                        display: flex;
                        color: #444649;
                        flex-direction: column;
                        align-items: center;
                        justify-content: flex-start;
                        border: 1px solid #04c2c9;
                        border-radius: 20px;
                        margin: 20px;
                    }

                    .proj-name {
                        font-size: 20pt;
                        font-weight: 400;
                        padding: 20px 0px 10px 0px;
                    }

                    .proj-tech {
                        font-size: 12pt;
                        font-weight: 400;
                        padding 15px 0px;
                    }

                    .sp-between {
                        flex: 1;
                    }

                    .button {
                        font-size: 12pt;
                        padding: 10px 15px;
                        margin-bottom: 25px;
                        border: 1px solid #04c2c9;
                        cursor: pointer;
                        color: #444649;
                        text-decoration: none;
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
                        .proj-name {
                            font-size: 20px;
                        }
                    }

                    // Medium devices (tablets, 768px and up)
                    @media (min-width: 576px) and (max-width: 768px) {
                    
                    }

                    // Large devices (desktops, 992px and up)
                    @media (min-width: 768px) and (max-width: 992px) {
                    
                    `
                }
            </style>
        </React.Fragment>
    );
};

export default LangCard;
