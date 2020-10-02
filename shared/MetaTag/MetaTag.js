import Head from 'next/head';

const MetaTag = ( props ) => {
    return (
        <React.Fragment>
            <Head>
                <meta property='og:title' content='Natheethorn Teacharuangchit | E-Portfolio' />
                <meta property='og:image' content='https://e-portfolio-2020.vercel.app/front-page.png' />
                <meta property='og:description' content='Natheethorn Teacharuangchit E-Portfolio deployed in 2020. Junior at UC Davis. Graduate June 2022. Utilizing Next.js, React.js, and Node.js for this web application' />
                <meta property='og:url' content='https://e-portfolio-2020.vercel.app/' />
                <link href="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css" rel="stylesheet" />
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <title>Beam | { props.name }</title>
            </Head>
        </React.Fragment>
    );
};

export default MetaTag;
