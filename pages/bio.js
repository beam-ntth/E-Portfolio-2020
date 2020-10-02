import Intro from '../components/MainPage/Intro';
import Navbar from '../components/Navigation/Navbar';
import { useState } from 'react';
import SideDrawer from '../shared/SideDrawer/SideDrawer';
import Backdrop from '../shared/Backdrop/Backdrop';
import MetaTag from '../shared/MetaTag/MetaTag';

const Bio = () => {
    const [ sideDrawerOpen, setSideDrawerOpen ] = useState( false );

    let backdrop;
    if ( sideDrawerOpen ) {
        backdrop = <Backdrop click={ () => setSideDrawerOpen( !sideDrawerOpen ) } />;
    }

    return (
        <div className="container">
            <MetaTag name='Biography' />
            <Navbar click={ () => setSideDrawerOpen( !sideDrawerOpen ) } />
            <SideDrawer show={ sideDrawerOpen } />
            { backdrop }
            <main>
                <Intro />
                <div className='space'></div>
            </main>
            <style jsx>
                {
                    `
                    main {
                        margin-top: 40px;
                    }

                    .space {
                        height: 10%;
                        width: 100%;
                    }

                    @media (max-width: 576px) {
                        main {
                            margin-top: 20px;
                        }
                    }  
                    `
                }
            </style>
        </div>

    );
};

export default Bio;