import FrontCard from './FrontCard';
import BackCard from './BackCard';

const ExpCard = ( props ) => {
    return (
        <React.Fragment>
            <div className="flip-card-container animation-card">
                <div className="flip-card">
                    <div className="flip-card-front">
                        <FrontCard> { props.place } </FrontCard>
                    </div>
                    <div className="flip-card-back">
                        <BackCard> { props.job } </BackCard>
                    </div>
                </div>
            </div>
            <style jsx>
                {
                    `
                        .flip-card-container {
                            width: 70%;
                            height: 500px;
                            perspective: 1000px;
                            margin: 20px;
                        }

                        .animation-card {
                            animation: fadeIn 1.25s; 
                        }

                        .flip-card {
                            position: relative;
                            width: 100%;
                            height: 100%;
                            transition: transform 1s;
                            transform-style: preserve-3d;
                        }

                        .flip-card-container:hover .flip-card {
                            transform: rotateY(180deg); /* <=>  rotateY(.5turn) */
                        }

                        /* Position the front and back side */
                        .flip-card-front, .flip-card-back {
                            position: absolute;
                            width: 100%;
                            height: 100%;
                            -webkit-backface-visibility: hidden; /* Safari */
                            backface-visibility: hidden;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }

                        .flip-card-back {
                            transform: rotateY(180deg);
                        }

                        @keyframes fadeIn {
                            from {opacity: 0; transform: translateY(100%);}
                            to {opacity: 1; transform: translateY(0)}		
                        }
                        `
                }
            </style>
        </React.Fragment>
    );
};

export default ExpCard;
