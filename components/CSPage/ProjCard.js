const ProjCard = ( props ) => {
    const { name, link, tech } = props.proj;

    const goTo = () => {
        window.open( link );
    };
    return (
        <React.Fragment>
            <div className={`outer-card ${props.className}`}>
                <div className='proj-name'>{ name }</div>
                <div className='sp-between'></div>
                <div className='proj-tech'>{ tech }</div>
                <div className='button' onClick={goTo}>LEARN MORE</div>
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

                    .animation-ltor {
                        animation: slideInLeft 0.75s ease-in;
                    }

                    .animation-rtol {
                        animation: slideInRight 0.75s ease-in;
                    }

                    @keyframes slideInLeft {
                        from {opacity: 0; transform: translateX(-100%)}
                        to {opacity: 1; transform: translateX(0)}		
                    }

                    @keyframes slideInRight {
                        from {opacity: 0; transform: translateX(100%)}
                        to {opacity: 1; transform: translateX(0)}		
                    }
                    `
                }
            </style>
        </React.Fragment>
    );
};

export default ProjCard;
