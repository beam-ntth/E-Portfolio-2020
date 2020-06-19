import Head from 'next/head';
import Link from 'next/link';

import Stars from '../shared/Star/Stars';

export default function Home () {
  return (
    <div className="container">
      <Head>
        <title>Beam | Main</title>
      </Head>
      <Stars />
      <div className='hero'>
        <div className='beam'>
          <h1>Hi, I'm <span className='name'>Natheethorn Teacharuangchit</span> </h1>
          <h1>I'm a full-stack web developer</h1>
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

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }

        #stars3 {
          width: 3px;
          height: 3px;
          background: transparent;
          box-shadow: 1272px 1753px #FFF , 1238px 1767px #FFF , 1197px 1003px #FFF , 1845px 1375px #FFF , 129px 873px #FFF , 154px 1917px #FFF , 274px 662px #FFF , 510px 397px #FFF , 1398px 1144px #FFF , 1053px 295px #FFF , 1966px 146px #FFF , 723px 277px #FFF , 1836px 1454px #FFF , 1305px 255px #FFF , 1967px 1394px #FFF , 1185px 1554px #FFF , 559px 12px #FFF , 907px 626px #FFF , 1516px 149px #FFF , 329px 578px #FFF , 176px 132px #FFF , 1995px 1450px #FFF , 1802px 1987px #FFF , 433px 179px #FFF , 275px 989px #FFF , 12px 74px #FFF , 779px 1780px #FFF , 1732px 1067px #FFF , 856px 580px #FFF , 1740px 1527px #FFF , 491px 1588px #FFF , 883px 1898px #FFF , 662px 196px #FFF , 1040px 1498px #FFF , 1599px 305px #FFF , 735px 106px #FFF , 779px 22px #FFF , 35px 1953px #FFF , 707px 902px #FFF , 982px 192px #FFF , 1390px 1851px #FFF , 1610px 578px #FFF , 803px 1806px #FFF , 1745px 1319px #FFF , 948px 648px #FFF , 648px 716px #FFF , 1236px 866px #FFF , 1119px 1301px #FFF , 98px 1677px #FFF , 65px 151px #FFF , 474px 582px #FFF , 1130px 469px #FFF , 1452px 186px #FFF , 1034px 1578px #FFF , 1628px 793px #FFF , 1430px 605px #FFF , 999px 845px #FFF , 521px 484px #FFF , 258px 778px #FFF , 1743px 878px #FFF , 1112px 1020px #FFF , 1482px 1227px #FFF , 1610px 143px #FFF , 296px 802px #FFF , 197px 637px #FFF , 1676px 962px #FFF , 1060px 1499px #FFF , 712px 48px #FFF , 440px 279px #FFF , 1099px 504px #FFF , 688px 328px #FFF , 40px 217px #FFF , 1694px 787px #FFF , 559px 1702px #FFF , 1747px 534px #FFF , 1512px 50px #FFF , 1239px 864px #FFF , 1343px 1828px #FFF , 1961px 638px #FFF , 1046px 921px #FFF , 405px 531px #FFF , 882px 1204px #FFF , 1247px 273px #FFF , 1107px 230px #FFF , 1494px 1404px #FFF , 797px 1793px #FFF , 338px 123px #FFF , 923px 1429px #FFF , 804px 1286px #FFF , 813px 1981px #FFF , 1618px 100px #FFF , 1653px 651px #FFF , 80px 1584px #FFF , 402px 1951px #FFF , 999px 1846px #FFF , 1837px 253px #FFF , 588px 844px #FFF , 447px 394px #FFF , 474px 1104px #FFF , 1697px 209px #FFF;
          animation: animStar 150s linear infinite;
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
