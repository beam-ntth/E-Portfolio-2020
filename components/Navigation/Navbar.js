import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();

    return (
        <React.Fragment>
            <nav className='nav'>
                <div className='pages'>
                    <Link href='/'><a className={ 'button ' + ( router.pathname === '/' ? 'active' : null ) }>HOME</a></Link>
                    <Link href='/bio'><a className={ 'button ' + ( router.pathname === '/bio' ? 'active' : null ) }>BIO</a></Link>
                    <Link href='/experience'><a className={ 'button ' + ( router.pathname === '/experience' ? 'active' : null ) }>EXPERIENCE</a></Link>
                    <Link href='/cs'><a className={ 'button ' + ( router.pathname === '/cs' ? 'active' : null ) }>CS</a></Link>
                    <Link href='/golf'><a className={ 'button ' + ( router.pathname === '/golf' ? 'active' : null ) }>GOLF</a></Link>
                    <Link href='/contact'><a className={ 'button ' + ( router.pathname === '/contact' ? 'active' : null ) }>CONTACT</a></Link>
                </div>
            </nav>
            <style jsx>
                {
                    `
                    a {
                        text-decoration: none;
                        color: white;
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
                    }

                    .pages {
                        display: flex;
                        flex-direction: row;
                        width: 40%;
                        height: 100%;
                        align-items: center;
                        justify-content: space-between;
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
                    }

                    // Medium devices (tablets, 768px and up)
                    @media (min-width: 576px) and (max-width: 768px) {
                        .nav {
                            font-size: 9pt;
                        }

                        .pages {
                            width: 50%;
                        }
                    }

                    // Large devices (desktops, 992px and up)
                    @media (min-width: 768px) and (max-width: 992px) {
                        .nav {
                            font-size: 10pt;
                        }
                    }
                    `
                }
            </style>
        </React.Fragment>
    );
};

export default Navbar;
