const BackCard = ( props ) => {
    const { position, respon } = props.children[ 1 ];

    let exp;
    if ( typeof ( position ) === 'object' ) {
        exp = (
            <div className='back-card'>
                <div className='content'>
                    <h1> { position.pos2 } </h1>
                    <ul>
                        <li> { respon.res3 } </li>
                        <li> { respon.res4 } </li>
                    </ul>
                    <h1> { position.pos1 } </h1>
                    <ul>
                        <li> { respon.res1 } </li>
                        <li> { respon.res2 } </li>
                    </ul>
                </div>
            </div> );
    } else {
        exp = (
            <div className='back-card'>
                <div className='content'>
                    <h1> { position } </h1>
                    <ul>
                        <li> { respon.res1 } </li>
                        <li> { respon.res2 } </li>
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
                    `
                }
            </style>
        </React.Fragment>
    );
};

export default BackCard;
