import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './projet.css'
import data from './Projets.json'
import Item from './Item'

export default function Projet() {
  return (
    <div id='Portfolio'>
        <div className="title">
            <h3>Projets</h3>
            <p><p>Découvrez une collection de mes réalisations les plus passionnantes, mettant en valeur mon expertise technique, ma vision artistique et ma passion pour les défis du développement.</p></p>
        </div>
        <Swiper style={{zIndex: 0}}>
                {data.map((data) =>
                <SwiperSlide>
                    <Item data={data}/>
                </SwiperSlide>)}
            </Swiper>
    </div>
  )
}
