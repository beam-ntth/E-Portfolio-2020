import { FiAlignJustify } from 'react-icons/fi';


const DrawerToggleButton = props => {
    return (
        <React.Fragment>
            <button className='toggleButton' onClick={ props.click } ><FiAlignJustify color="white" size={ 30 } /></button>
            <style jsx>
                {
                    `
                    .toggleButton {
                        padding: 1;
                        box-sizing: border-box;
                        background-color: transparent;
                        border-radius: 8px;
                        border: 2px solid white;
                        cursor: pointer;
                    }
                    
                    .toggleButton:focus {
                        outline: none;
                    }
                    
                    .toggleButton:hover {
                        border: 1px solid white;
                    }
                    `
                }
            </style>
        </React.Fragment>
    );
};

export default DrawerToggleButton;