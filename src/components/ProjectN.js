// import React from 'react'
// import Zoom from 'react-reveal/Zoom'
// import Fade from 'react-reveal/Fade'
// import greenGarms from '../images/green-garms.png'
// import swell from '../images/swell.png'
// import makeItCount from '../images/make-it-count.png'
// import lifeOnMars from '../images/life-on-mars.png'
// import tetris from '../images/tetris.png'
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
// import GreenGarms from './GreenGarms'

// const ProjectN = () => {

//   function toggleForm(e) {
//     // setModalContent(e.target.value)
//     const modalSelected = document.querySelector(`#${e.target.value}`)
//     modalSelected.classList.toggle('is-active')
//     // console.log(e.target.value)
//     // setItemModal(!itemModal)
//   }

//   return <section className='section' id="experience-page">
//     <Zoom right cascade>
//       <div id='project-title'>PROJECTS</div>
//     </Zoom>
//     <Fade bottom>
//       <div id='experience-container'>
//         <CarouselProvider
//           naturalSlideWidth={100}
//           naturalSlideHeight={115}
//           totalSlides={4}
//         >
//           <Slider>
//             <Slide className='slide' index={0}>
//               <div className='slide-content'>
//                 <div id='green-garms' className='modal'>
//                   <div className="modal-background" ></div>
//                   <div className='modal-content'>
//                     <GreenGarms
//                     />
//                   </div>
//                   <button className="modal-close is-large" aria-label="close" value='green-garms' onClick={e => toggleForm(e)} ></button>
//                 </div>
//                 <img className='project-img' src={greenGarms} alt='Green Garms' />
//                 <div className="overlay">
//                   <div className="text">
//                     <div className='text-title'>Green Garms</div>
//                     <p>A Sustainable Fashion App</p>
//                     <button className='read-more button' value='green-garms' onClick={e => toggleForm(e)}>Read More</button>
//                   </div>
//                 </div>
//               </div>
//             </Slide>
//             <Slide className='slide' index={1}>
//               <div className='slide-content'>
//               </div>
//             </Slide>
//             <Slide className='slide' index={2}>
//               <div className='slide-content'>
//               </div>
//             </Slide>
//             <Slide className='slide' index={3}>
//               <div className='slide-content'>
//               </div>
//             </Slide>
//           </Slider>
//           <div id='button-box'>
//             <ButtonBack id='slider-button-1'>
//               <i className="fas fa-angle-double-left"></i>
//             </ButtonBack>
//             <ButtonNext id='slider-button-2'>
//               <i className="fas fa-angle-double-right"></i>
//             </ButtonNext>
//           </div>
//         </CarouselProvider>
//       </div>
//     </Fade>
//   </section>
// }



// export default ProjectN