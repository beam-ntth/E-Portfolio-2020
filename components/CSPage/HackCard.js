const HackCard = ( props ) => {
    const { place, image, link, tech } = props.hack;
    const goTo = () => {
        window.open( link );
    };

    return (
        <React.Fragment>
            <div className='card-outer'>
                {/* <div className='hack-card'>
                    <h3>{ name }</h3>
                    <h3> { place } </h3>
                    <h4> { tech } </h4>
                    <div className='button' onClick={ goTo }>LEARN MORE</div>
                </div> */}
                <div className='hack-background'>
                    <img src={ image } alt='hackathon project' />
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
                        margin: 20px 0px;
                    }

                    .hack-background {
                        width: 100%;
                        height: 100%;
                        z-index: 5;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .hack-background img {
                        height: 100%;
                    }

                    .hack-background:hover {
                        animation: fade-out 0.3s ease-in-out;
                        opacity: 0;
                    }

                    .hack-card {
                        width: 100%;
                        height: 100%;
                        top: 0;
                        left: 0;
                        z-index: 1;
                    }

                    @keyframes fade-out {
                        from {opacity: 1;}
                        to {opacity: 0;}		
                    }
                    `
                }
            </style>
        </React.Fragment>
    );
};

export default HackCard;
