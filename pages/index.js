import Head from 'next/head';
import Link from 'next/link';

import Stars from '../shared/Star/Stars';

export default function Home () {
  return (
    <div className="container">
      <Head>
        <meta property='og:title' content='Natheethorn Teacharuangchit | E-Portfolio' />
        <meta property='og:image' content='https://e-portfolio-2020.vercel.app/front-page.png' />
        <meta property='og:description' content='Natheethorn Teacharuangchit E-Portfolio deployed in 2020. Junior at UC Davis. Graduate June 2022. Utilizing Next.js, React.js, and Node.js for this web application' />
        <meta property='og:url' content='https://e-portfolio-2020.vercel.app/' />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>Beam | Main</title>
      </Head>
      <Stars />
      <div className='hero'>
        <div className='beam'>
          <h1>Hi, I'm <span className='name'>Natheethorn Teacharuangchit</span>. </h1>
          <h1>I'm a sophomore at University of California, Davis,</h1>
          <h1>and I'm majoring in <span className='major'>Computer Science and Engineering</span></h1>
        </div>
        <Link href='/bio'>
          <div className='button learn-more'>
            Learn more about me
        </div>
        </Link>
      </div>

      <style jsx>{ `
        .container {
          overflow: hidden;
          overflow-y: hidden;
        }

        .button {
          padding: 12px 20px;
          margin-top: 20px;
          border: 1px solid #fff;
          cursor: pointer;
          transition: 0.3s;
        }

        .button:hover {
          background-color: #04c2c9;
          border: 1px solid #04c2c9;
        }

        .hero {
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #252934;
          font-family: 'Montserrat', sans-serif;
          z-index: 1
        }

        .hero h1 {
          padding: 0;
          margin: 0;
          color: white;
          font-weight: lighter;
        }

        .hero .name {
          color: #04c2c9;
        }

        .hero .major {
          color: #e31b6d;
        }

        .beam {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .learn-more {
          font-size: 20px;
          text-decoration: none;
          background-color: #252934;
          color: white; 
        }

        // Small devices
        @media (max-width: 576px) {
          .hero h1 {
            font-size: 9pt;
            line-height: 15pt;
          }

          .learn-more {
            font-size: 8px;
          }

          .button {
            padding: 10px 15px;
            margin-top: 18px;
            border: 1px solid #fff;
            cursor: pointer;
            transition: 0.3s;
          }
        }

        // Medium devices (tablets, 768px and up)
        @media (min-width: 576px) and (max-width: 768px) {
          .hero h1 {
            font-size: 18pt;
            line-height: 27pt;
          }

          .learn-more {
            font-size: 18px;
          }
        }

        // Large devices (desktops, 992px and up)
        @media (min-width: 768px) and (max-width: 992px) {
          .hero h1 {
            font-size: 19.5pt;
            line-height: 28pt;
          }
        }

      }
      `}</style>

      <style jsx global>{ `
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        
        * {
          box-sizing: border-box;
        }

        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap');
      `}</style>
    </div>
  );
}
