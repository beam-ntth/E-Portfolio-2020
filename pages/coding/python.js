import Head from "next/head";
const { default: Navbar } = require( "../../components/Navigation/Navbar" );

const python = () => {
    return (
        <div className="container">
            <Head>
                <title>Beam | Coding | Python</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            Coming soon!
        </div>
    )
}

export default python
