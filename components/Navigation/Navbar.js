import Link from 'next/link';
import { useRouter } from 'next/router';
import DrawerToggleButton from '../../shared/SideDrawer/DrawerToggleButton';

const Navbar = ( props ) => {
    const router = useRouter();

    return (
        <React.Fragment>
            <nav className='nav'>
                <div className='pages'>
                    <div className='tg-button'><DrawerToggleButton click={ props.click } /></div>
                    <div className='main-buttons'>
                        <Link href='/'><a className={ 'button ' + ( router.pathname === '/' ? 'active' : null ) }>HOME</a></Link>
                        <Link href='/bio'><a className={ 'button ' + ( router.pathname === '/bio' ? 'active' : null ) }>BIO</a></Link>
                        <Link href='/experience'><a className={ 'button ' + ( router.pathname === '/experience' ? 'active' : null ) }>EXPERIENCE</a></Link>
                        <Link href='/cs'><a className={ 'button ' + ( router.pathname === '/cs' ? 'active' : null ) }>CS</a></Link>
                        <Link href='/golf'><a className={ 'button ' + ( router.pathname === '/golf' ? 'active' : null ) }>GOLF</a></Link>
                        <Link href='/contact'><a className={ 'button ' + ( router.pathname === '/contact' ? 'active' : null ) }>CONTACT</a></Link>
                    </div>
                </div>
            </nav>
            <style jsx>
                {
                    `
                    a {
                        text-decoration: none;
                        color: white;
                        margin-right: 20px;
                    }

                    a:hover {
                        color: #e31b6d;
                        transition: 0.3s;
                    }
              
                    .nav {
                        width: 100%;
                        height: 60px;
                        margin: -8px -8px 0px -8px;
                        padding-left: 20px;
                        font-family: 'Montserrat', sans-serif;
                        font-size: 14pt;
                        font-weight: 200;
                        color: white;
                        background-color: #04c2c9;
                        z-index: 50;
                    }

                    .pages {
                        display: flex;
                        flex-direction: row;
                        width: 40%;
                        height: 100%;
                        align-items: center;
                        justify-content: flex-start;
                    }

                    .tg-button {
                        visibility: hidden;
                    }

                    .active {
                        color: #e31b6d;
                    }

                    // Small devices
                    @media (max-width: 576px) {
                        .nav {
                            font-size: 9pt;
                        }
                        
                        .pages {
                            width: 50%;
                        }

                        .main-buttons {
                            display: none;
                        }
                    }

                    // Medium devices (tablets, 768px and up)
                    @media (min-width: 576px) and (max-width: 768px) {
                        .nav {
                            font-size: 9pt;
                        }

                        .pages {
                            width: 50%;
                        }

                        .main-buttons {
                            display: none;
                        }
                    }

                    // Large devices (desktops, 992px and up)
                    @media (min-width: 768px) and (max-width: 992px) {
                        .nav {
                            font-size: 10pt;
                        }

                        .main-buttons {
                            display: none;
                        }

                        .tg-button {
                            visibility: visible;
                        }
                    }
                    `
                }
            </style>
        </React.Fragment>
    );
};

export default Navbar;
