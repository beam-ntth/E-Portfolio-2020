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
                        height: 550px;
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

                    // Small devices
                    @media (max-width: 576px) {

                        .card {
                            height: 700px;
                            justify-content: flex-start;
                        }
                        .card h1 {
                            margin: 40px 0px 10px 0px;
                            font-size: 25px;
                        }

                        .card h2 {
                            margin: 0px 0px 15px 0px;
                            font-size: 15px;
                        }

                        .image {
                            height: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }

                        .image img {
                            height: auto;
                            width: 90%;
                        }

                        .date {
                            display: flex;
                            flex-direction: column;
                        }

                        .space {
                            font-size: 15px;
                            margin: 10px 0px
                        }

                        .from, .to {
                            font-size: 15px;
                        }
                    }

                    // Medium devices (tablets, 768px and up)
                    @media (min-width: 576px) and (max-width: 768px) {
                        .card {
                            height: 700px;
                            justify-content: flex-start;
                        }
                        .card h1 {
                            margin: 40px 0px 10px 0px;
                            font-size: 25px;
                        }

                        .card h2 {
                            margin: 0px 0px 15px 0px;
                            font-size: 15px;
                        }

                        .image {
                            height: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            margin: 20px 0px;
                        }

                        .image img {
                            height: 100%;
                        }

                        .date {
                            display: flex;
                            flex-direction: column;
                        }

                        .space {
                            font-size: 15px;
                            margin: 10px 0px
                        }

                        .from, .to {
                            font-size: 15px;
                        }
                    }

                    // Large devices (desktops, 992px and up)
                    @media (min-width: 768px) and (max-width: 992px) {
                        .card {
                            height: 700px;
                            justify-content: flex-start;
                        }
                        .card h1 {
                            margin: 40px 0px 10px 0px;
                            font-size: 25px;
                        }

                        .card h2 {
                            margin: 0px 0px 15px 0px;
                            font-size: 15px;
                        }

                        .image {
                            height: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            margin: 20px 0px;
                        }

                        .image img {
                            height: 100%;
                        }

                        .date {
                            display: flex;
                            flex-direction: column;
                        }

                        .space {
                            font-size: 15px;
                            margin: 10px 0px
                        }

                        .from, .to {
                            font-size: 15px;
                        }
                    }
                    `
                }
            </style>
        </React.Fragment>
    );
};

export default SmallerCard;
