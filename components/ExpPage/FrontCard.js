const SmallerCard = ( props ) => {
    const { name, location, image, date } = props.children[ 1 ];

    return (
        <React.Fragment>
            <div className='card'>
                <h1>{ name }</h1>
                <h2>{ location }</h2>
                <div className='image'>
                    <img src={ image } />
                </div>
                <div className='date'>
                    <div className='from'>From: { date.from }</div>
                    <div className='space'><span>------------------------------------</span></div>
                    <div className='to'>To: { date.to }</div>
                </div>
            </div>
            <style jsx>
                {
                    `
                    .card {
                        color: #444649;
                        height: 500px;
                        width: 100%;
                        background-color: #fff;
                        border-radius: 30px;
                        margin: 20px;
                        border: 0.5px solid #04c2c9;
                        box-shadow: 5px 5px #04c2c9;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }

                    .card h1 {
                        margin: 20px 0px 20px 0px;
                        font-family: 'Montserrat', sans-serif;
                        font-weight: 400;
                    }

                    .card h2 {
                        margin: 0px 0px 20px 0px;
                        font-family: 'Montserrat', sans-serif;
                        font-weight: 400;
                    }

                    .image {
                        height: 50%;
                    }

                    .image img {
                        height: 100%;
                    }

                    .date {
                        width: 70%;
                        font-weight: 200;
                        margin: 20px 0px 20px 0px;
                        font-size: 15pt;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                    }
                    `
                }
            </style>
        </React.Fragment>
    );
};

export default SmallerCard;
