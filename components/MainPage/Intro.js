import React from "react";

const Intro = () => {
    return (
        <React.Fragment>
            <div className="about-me">
                <h1>About me</h1>
                <div className='description'>
                    <img src='/beam.JPG' />
                    <div className='bio'>
                        <p>My name is Natheethorn Teacharuangchit. I was born in Bangkok, Thailand. I'm currently a student-athlete on the Men's Golf Team at University of California, Davis and pursuing a Bachelor's Degree of Computer Science and Engineering. I mostly spend my time coding(obviously), practicing golf, and hanging out with my boys. If you wonder why I started programming or playing golf, go visit my CS and GOLF page!</p>
                        <h4>Other Interests</h4>
                        <ul>
                            <li>Try out thai tea boba at any new boba places near me</li>
                            <li>Rick and Morty</li>
                        </ul>
                    </div>
                </div>
            </div>
            <style jsx>
                {
                    `
                    .description {
                        display: flex;
                        flex-direction: row;
                        height: 200px;
                    }

                    img {
                        height: 100%;
                        padding: 0 1rem;
                    }
                    `
                }
            </style>
        </React.Fragment>
    );
};

export default Intro;
