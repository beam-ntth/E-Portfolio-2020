import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';

const SideDrawer = props => {
    let drawerClasses = [ 'sideDrawer' ];
    if ( props.show ) {
        drawerClasses.push( 'open' );
    }
    return (
        <React.Fragment>
            <nav className={ drawerClasses.join( ' ' ) }>
                <ul>
                    <Link href='/'>
                        <a className='clickable'>
                            HOME<div className='spacer'></div><FiChevronRight size={ 30 } />
                        </a>
                    </Link>
                    <Link href='/bio'>
                        <a className='clickable'>
                            BIO<div className='spacer'></div><FiChevronRight size={ 30 } />
                        </a>
                    </Link>
                    <Link href='/experience'>
                        <a className='clickable'>
                            EXPERIENCE<div className='spacer'></div><FiChevronRight size={ 30 } />
                        </a>
                    </Link>
                    <Link href='/cs'>
                        <a className='clickable'>
                            CS<div className='spacer'></div><FiChevronRight size={ 30 } />
                        </a>
                    </Link>
                    <Link href='/golf'>
                        <a className='clickable'>
                            GOLF<div className='spacer'></div><FiChevronRight size={ 30 } />
                        </a>
                    </Link>
                    <Link href='/contact'>
                        <a className='clickable'>
                            CONTACT<div className='spacer'></div><FiChevronRight size={ 30 } />
                        </a>
                    </Link>
                </ul>
            </nav>
            <style jsx>
                {
                    `
                    .sideDrawer {
                        height: 100%;
                        background-color: white;
                        box-shadow: 1px 0px 7px rgba(0,0,0,0.5);
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 60%;
                        max-width: 320px;
                        z-index: 200;
                        transform: translateX(-100%);
                        transition: transform 0.3s ease-out;
                    }
                    
                    .open {
                        transform: translateX(0) !important;
                    }
                    
                    .sideDrawer ul {
                        list-style: none;
                        display: flex;
                        flex-direction: column;
                        margin: 0;
                        padding: 0;
                    }
                    
                    .sideDrawer a {
                        padding: 20px;
                    }
                    
                    .spacer {
                        flex: 1;
                    }
                    
                    .clickable {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        color: #04c2c9;
                        text-decoration: none;
                        cursor: pointer;
                    }
                    
                    .clickable:hover {
                        background-color: #f2f2f2;
                    }
                    `
                }
            </style>
        </React.Fragment>
    );
};

export default SideDrawer;