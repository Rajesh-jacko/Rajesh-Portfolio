import React, { useEffect,useState } from 'react';
import AnimatedBtn from '../animatedButton/AnimatedBtn';
import elintegroImg from '../../assets/website.png'
import coinatmImg from '../../assets/coinatm.webp';
import dammpSuiteImg from '../../assets/dammp.webp';
import astroBabiesImg from '../../assets/astrobabies.webp';
import larpExplorerImg from '../../assets/continuum.png';
import dinoDamesImg from '../../assets/dinodames.jpg';
import homeGlobeImg from '../../assets/homeglobe.png'
import msgNotifImg from '../../assets/msgNotif.png'
import Html from '../../assets/toolsIcons/html.svg'
import CSS from '../../assets/toolsIcons/css.svg'
import WordPress from '../../assets/toolsIcons/wordpress.svg'
import JS from '../../assets/toolsIcons/javascript.svg'
import VUE from '../../assets/toolsIcons/vue.svg'
import REACT from '../../assets/toolsIcons/react.png'
import Bootstrap from '../../assets/toolsIcons/Bootstrap.png'
import JQuery from '../../assets/toolsIcons/JQuery.svg'
import TailwindCSS from '../../assets/toolsIcons/tailwind.svg'
import TypeScript from '../../assets/toolsIcons/TypeScript.svg'
import Java from '../../assets/toolsIcons/Java.svg'
import Blockchain from '../../assets/toolsIcons/Blockchain.svg'
import MySQL from '../../assets/toolsIcons/MySQL.svg'
import devops from '../../assets/toolsIcons/devops.svg'
import rajesh from '../../assets/rajesh.jpg'
import star from '../../assets/toolsIcons/star.webp'

function HomePage({ text = 'HAPPY CODING!!!' }) {
  const [formattedText, setFormattedText] = useState('');

  useEffect(() => {
    const delay = 200; // Delay before starting the animation

    // Split text into individual letters and wrap each in a <span>
    const spans = text.split('').map((letter, index) => {
      return `<span style="animation-delay: ${index * 60 + delay}ms" class="wavy">${letter}</span>`;
    });

    // Set the formatted text with span elements
    setFormattedText(spans.join(''));
  }, [text]);

  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return "Good morning"; // Before 12 PM (morning)
    if (hours >= 12 && hours < 17) return "Good afternoon"; // From 12 PM to 4:59 PM (afternoon)
    return "Good evening"; // After 5 PM (evening)
  };
  const projects = [

    { title: 'Coinatm', description: 'A cryptocurrency ATM solution for quick transactions.', image: coinatmImg, link: 'https://omnipay-dev.elintegro.com/' },
    { title: 'DammpSuite', description: 'A web application to make a profitable trade using their bot to trade.', image: dammpSuiteImg, link: 'https://ottomatictrading.com/' },
    { title: 'AstroBabies', description: 'A NFT Project with 3 big collections (Babies, Apes, Pups) on Solana blockchain.', image: astroBabiesImg, link: 'https://astrobabies.io' },
    { title: 'The LarpExplorer', description: 'An app which is build to fetch the real data from etherscan.', image: larpExplorerImg, link: 'https://thelarpexplorerbeta.netlify.app/' },
    { title: 'DinoDames', description: 'Dinodames is a NFT project of dinosaurs based on ETH blockchain.', image: dinoDamesImg, link: 'https://dinodamesgameteaser.netlify.app/' },
    { title: 'Elintegro', description: 'A seamless integration platform for enterprises with supervision.', image: elintegroImg, link: 'https://elintegro.com' },
    { title: 'HomeGlobe', description: 'A platform for renting homes to travelers offering booking experience.', image: homeGlobeImg, link: 'https://globech-dev.elintegro.com/login' },
    { title: 'Msg Notification', description: 'An application that provides  live chat support to customers.', image: msgNotifImg, link: 'https://msgnotification.elintegro.com/home/live' }
  ];

  const languages = [
    { title: "HTML", image: Html },
    { title: "CSS", image: CSS },
    { title: "JavaScript", image: JS },
    { title: "VueJS", image: VUE },
    { title: "ReactJS", image: REACT },
    { title: "WordPress", image: WordPress },
    { title: "Bootstrap", image: Bootstrap },
    { title: "JQuery", image: JQuery },
    { title: "TailwindCSS", image: TailwindCSS },
    { title: "TypeScript", image: TypeScript },
    { title: "Java", image: Java },
    { title: "MySQL", image: MySQL },
    { title: "Blockchain", image: Blockchain },  // or use Bitcoin icon
    { title: "devops", image: devops }  // or use Bitcoin icon
  ];

  const timelineData = [
    { year: "2017", text: "Embarked on my journey with HTML, CSS & JS" },
    { year: "2018", text: "Commenced the B.Sc. CSIT program" },
    { year: "2019", text: "Involved into Node JS" },
    { year: "2020", text: "Exhibited the frontend tools like Vue and React" },
    { year: "2021", text: "Completed college projects with Vuejs" },
    { year: "2022", text: "Completed B.Sc. CSIT program and started Internship" },
    { year: "2023", text: "Employed as a Front-End Developer @Elintegro.Inc" },
  ];


  useEffect(() => {
    const imageUrls = projects.map((project) => project.image);
    preloadImages(imageUrls);
  });

  const preloadImages = (imageUrls) => {
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  };
  const handleProjectClick = (link) => {
    window.open(link, '_blank');
  }

  
  return (
    <div className='max-w-6xl p-4 m-auto' style={{marginTop:'-12px', paddingTop:'0'}}>
      <div className="text-left  h-[calc(100vh-112px)] overflow-y-auto flex flex-col items-start justify-center">
        <section>
          <h2 className="greeting-text">
            {getGreeting()}!
            <br />
            It's me, Rajesh Jacko.
          </h2>
          <p className="max-w-[800px] sm:text-2xl text-xl leading-[40px] font-light text-white/50">
            Let’s build something amazing together!
          </p>
          <AnimatedBtn />
        </section>
      </div>

      <div id='project'>
        <div className='w-20 h-2.5 divider my-4'></div>
        <h1 className="greeting-text">Projects</h1>
        <section className='flex flex-wrap justify-center sm:justify-start sm:gap-16 gap-3 '>
          {projects.map((project, index) => {
            return (
              <div key={index} className="project-item my-4 flex flex-wrap w-60 gap-2 justify-center m-3"
                onClick={() => handleProjectClick(project.link)}
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img  "
                />
                <h1 className='text-gray-400 font-semibold mt-2 project-title'>{project.title}</h1>
                <p className=' project-title'>{project.description}</p>

              </div>)
          })}
        </section>
      </div>
      <div id='technologies'>
        <div className='w-20 h-2.5 divider my-4 mt-32'></div>
        <h1 className="greeting-text">Technologies</h1>
        <p className="max-w-[800px] text-md sm:text-xl leading-[40px] font-light text-left text-white/50">
          I am a frontend developer with expertise in creating responsive, user-friendly interfaces using modern web technologies. My focus is on delivering seamless and engaging user experiences.
        </p>
        <p className="max-w-[800px] text-2xl leading-[40px] font-bold text-left text-white my-3">
          Languages and tools
        </p>
        <section className='flex flex-wrap gap-y-3 gap-5 sm:gap-10 align-center justify-around sm:justify-start mt-6'>
          {
            languages.map((language, index) => {
              return (
                <div key={index} className='tools gap-2 flex justify-center flex-col items-center mt-4'>
                  <img
                    src={language.image}
                    alt={language.title}
                    className='w-7 h-7'
                  />
                  <p>{language.title}</p>
                </div>
              )
            })
          }
        </section>
      </div>
      <div id='about-me'>
        <div className='w-20 h-2.5 divider my-4 mt-32'></div>
        <h1 className="greeting-text">About Me</h1>
        <section className=' sm:gap-20 gap-8 flex flex-wrap mt-4 mb-20'>
          <img
            src={rajesh}
            alt={rajesh}
            className='w-80 h-auto object-contain'
          />
          <p className='flex flex-col flex-wrap justify-center sm:gap-7 gap-4 font-light text-sm sm:text-base'>
            <span className='about-me'>Experienced in ReactJS,  VueJS and WordPress Development</span>
            <span className='about-me'>Proficient in Smart Contract Deployment in ETH</span>
            <span className='about-me'>Developed Minting dApp for mining NFTs in SOlONA</span>
            <span className='about-me'>Adept at integrating Third-Party APIs</span>
            <span className='about-me'>Experience with MySQL for data storage and management
            </span>
            <span className='about-me'>Application Deployment on the server</span>
            <span className='about-me'>Worked with Java and Python for backend development</span>
          </p>
        </section>
        <div  className='flex flex-wrap mt-12 gap-10'>
        {timelineData.map((timeline, index)=> {
          return (
            <section  key={index} className='w-28 flex flex-col text-left gap-2'  >
            <span  className='text-2xl tracking-wide timeline-year font-bold items-center flex'>{timeline.year}  <img style={{ marginLeft: '30px' }}  src={star} alt='star' className='w-10'/> </span>
            <span className='text-sm tracking-wide'>{timeline.text}</span>
            </section>
          )
        })}
        </div>
      </div>
      <div className='w-auto h-0.5 text-white bg-slate-600 my-1 mt-20'></div>
      <div className='flex justify-between flex-wrap text-left gap-10 mt-16'>
      <p className='flex flex-col tools'>
        <span  className=' text-gray-300 mb-5 '>PHONE</span>
        <span>+977-9860465506</span>
        </p>
        <p className='flex flex-col tools'>
        <span  className=' text-gray-300 mb-5'>EMAIL</span>
        <span>rajeshjacko269@gmail.com</span>
        </p>

        
      </div>
      <h1
        id="animated"
        className="color-changing my-10"
        dangerouslySetInnerHTML={{ __html: formattedText }}
      />
    </div>
  );
}

export default HomePage;
