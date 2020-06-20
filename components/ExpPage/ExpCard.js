import FrontCard from './FrontCard';
import BackCard from './BackCard';

const ExpCard = () => {
    const Dipsea = {
        name: 'Dipsea Capital, LLC',
        image: '',
        date: 'Mar 2020 - Current'
    };
    return (
        <React.Fragment>
            <div className="flip-card-container">
                <div className="flip-card">
                    <div className="flip-card-front">
                        <FrontCard> {Dipsea} </FrontCard>
                    </div>
                    <div className="flip-card-back">
                        <BackCard> {Dipsea} </BackCard>
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
                    `
                }
            </style>
        </React.Fragment>
    );
};

export default ExpCard;
