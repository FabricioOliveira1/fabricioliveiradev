import HighlightCard from '../ui/Cards/HighlightCard'
import styled from 'styled-components'
import fundoBanner from '../../assets/fundo-banner.jpg'
import Imagem from '../Imagem'

import { motion } from 'motion/react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react'

const StyledPortifolio = styled.section`

  background: linear-gradient( ${props => props.theme.colors.bgDark} 20%, rgb(255, 255, 255, 0) 80%, ${props => props.theme.colors.bgDark}), url(${fundoBanner}) no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  animation: .7s ease-in slideUp;

  h2 {
  font-size: 32px;
  text-align: center;
  color: ${props => props.theme.colors.secondaryColor};
  }
  .learningProjects > h3 {
    font-size: 18px;
    text-align: center;
    margin-bottom: 1rem;
  }
 
  @media (min-width: 768px) {
    align-items: center;
}
`

const Portifolio = ({ learningRepos, highlightrepos }) => {

  const [repositories, setRepositories] = useState([]);
  async function fetchRepositories() {
    const repos = await fetch("https://my-json-server.typicode.com/FabricioOliveira1/site-images/db")
      .then((response) => (response.json()))
      .then((data) => data.repositorios)
      .then((repositorios) => {
        setRepositories(repositorios) 
      })
  }

  useEffect(() => {
    fetchRepositories()
    }, [])


  return (
    <StyledPortifolio id='portifolio'>
      <h2>Projetos</h2>
      <div className='personalProjects'>
        {/* <h3>Destaques</h3>
        <ul className='personalProjects-list'>
          {highlightrepos.map((repo) => 
           <HighlightCard key={repo.id} info={repo} /> 
          )}
        </ul> */}
      </div>
      <motion.div initial={{
        opacity: 0
      }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1 }
        }} className='learningProjects'>
        <h3>Projetos de Cursos</h3>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={'auto'}
        
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        >
        { repositories ?
            repositories.map((repo) => 
            <SwiperSlide key={repo.id}>
              <Imagem key={repo.id}  info={repo} /> 
            </SwiperSlide>
          )
          : 
          learningRepos.map((repo) => 
            <SwiperSlide key={repo.id}>
              <Imagem key={repo.id}  info={repo} /> 
            </SwiperSlide>
          )
        }
        

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
        </Swiper>
      </motion.div>
    </StyledPortifolio>
  )
}

export default Portifolio