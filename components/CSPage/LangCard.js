import Link from "next/link";

const LangCard = ( props ) => {
    const { name, link } = props.lang;

    return (
        <React.Fragment>
            <div className={`outer-card ${props.className}`}>
                <div className='proj-name'>{ name }</div>
                <div className='sp-between'></div>
                <Link href={ link }><a className='button'>LEARN MORE</a></Link>
            </div>
            <style jsx>
                {
                    `
                    .outer-card {
                        font-family: 'Montserrat', sans-serif;
                        width: 350px;
                        height: 150px;
                        display: flex;
                        color: #444649;
                        flex-direction: column;
                        align-items: center;
                        justify-content: flex-start;
                        border: 1px solid #04c2c9;
                        border-radius: 20px;
                        margin: 20px;
                    }

                    .proj-name {
                        font-size: 20pt;
                        font-weight: 400;
                        padding: 20px 0px 10px 0px;
                    }

                    .proj-tech {
                        font-size: 12pt;
                        font-weight: 400;
                        padding 15px 0px;
                    }

                    .sp-between {
                        flex: 1;
                    }

                    .button {
                        font-size: 12pt;
                        padding: 10px 15px;
                        margin-bottom: 25px;
                        border: 1px solid #04c2c9;
                        cursor: pointer;
                        color: #444649;
                        text-decoration: none;
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

                    .animation-fi {
                        animation: fadeIn 0.75s ease-in;
                    }

                    @keyframes slideInLeft {
                        from {opacity: 0; transform: translateX(-100%)}
                        to {opacity: 1; transform: translateX(0)}		
                    }

                    @keyframes slideInRight {
                        from {opacity: 0; transform: translateX(100%)}
                        to {opacity: 1; transform: translateX(0)}		
                    }

                    @keyframes fadeIn {
                        from {opacity: 0}
                        to {opacity: 1}		
                    }
                    `
                }
            </style>
        </React.Fragment>
    );
};

export default LangCard;
