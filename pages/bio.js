import Head from 'next/head';

import Intro from '../components/MainPage/Intro';
import Navbar from '../components/Navigation/Navbar';
import { useState } from 'react';
import SideDrawer from '../shared/SideDrawer/SideDrawer';
import Backdrop from '../shared/Backdrop/Backdrop';

const Bio = () => {
    const [ sideDrawerOpen, setSideDrawerOpen ] = useState( false );

    let backdrop;
    if ( sideDrawerOpen ) {
        backdrop = <Backdrop click={ () => setSideDrawerOpen( !sideDrawerOpen ) } />;
    }

    return (
        <div className="container">
            <Head>
                <title>Beam | Biography</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar click={ () => setSideDrawerOpen( !sideDrawerOpen ) } />
            <SideDrawer show={sideDrawerOpen} />
            { backdrop }
            <main>
                <Intro />
            </main>
            <style jsx>
                {
                    `
                    main {
                        margin-top: 40px;
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