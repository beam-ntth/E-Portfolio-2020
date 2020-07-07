const BackCard = ( props ) => {

    let position, respon, respon1, respon2;
    if (typeof( props.children[ 1 ].position) === 'object') {
        position = props.children[ 1 ].position;
        respon1 = props.children[ 1 ].respon1;
        respon2 = props.children[ 1 ].respon2
    } else {
        position = props.children[ 1 ].position;
        respon = props.children[ 1 ].respon;
    }
    
    let exp;
    if ( typeof ( position ) === 'object' ) {
        exp = (
            <div className='back-card'>
                <div className='content'>
                    <h1> { position.pos2 } </h1>
                    <ul>
                        { respon2.map( (res, index) => <li key={'respon2'+index}> { res } </li> ) }
                    </ul>
                    <h1> { position.pos1 } </h1>
                    <ul>
                        { respon1.map( (res, index) => <li key={'respon1'+index}> { res } </li> ) }
                    </ul>
                </div>
            </div> );
    } else {
        exp = (
            <div className='back-card'>
                <div className='content'>
                    <h1> { position } </h1>
                    <ul>
                        { respon.map( (res, index) => <li key={'respon'+index}> { res } </li> ) }
                    </ul>
                </div>
            </div> );
    }

    return (
        <React.Fragment>
            { exp }
            <style jsx global>
                {
                    `
                    .back-card {
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
                        font-family: 'Montserrat', sans-serif;
                        color: #444649;
                    }

                    .content h1 {
                        margin: 20px 0px;
                        font-weight: 400;
                    }

                    .content li {
                        font-weight: 200;
                        line-height: 20pt;
                    }

                    .content {
                        width: 70%;
                    }

                    // Small devices
                    @media (max-width: 576px) {
                        .back-card {
                            height: 700px;
                        }
                        .content h1 {
                            margin: 10px 0px;
                            font-size: 20px;
                        }
                        .content {
                            width: 95%;
                        }
                        .content li {
                            font-size: 13px;
                            line-height: 20pt;
                        }
                    }

                    // Medium devices (tablets, 768px and up)
                    @media (min-width: 576px) and (max-width: 768px) {
                        .back-card {
                            height: 700px;
                        }
                    }

                    // Large devices (desktops, 992px and up)
                    @media (min-width: 768px) and (max-width: 992px) {
                        .back-card {
                            height: 700px;
                        }
                    }
                    `
                }
            </style>
        </React.Fragment>
    );
};

export default BackCard;
