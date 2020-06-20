const SmallerCard = ( props ) => {
    const { name, image, date } = props.children[ 1 ];

    return (
        <React.Fragment>
            <div className='card'>
                { name }
            </div>
            <style jsx>
                {
                    `
                    .card {
                        height: 500px;
                        width: 100%;
                        background-color: #fff;
                        border-radius: 30px;
                        margin: 20px;
                        box-shadow: 5px 5px gray;
                    }

                    .card h1 {
                        margin: 0;
                    }
                    `
                }
            </style>
        </React.Fragment>
    );
};

export default SmallerCard;
