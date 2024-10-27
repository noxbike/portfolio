import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './projet.css'
import data from '../../data_json/Projets.json'
import Item from './Item'

export default function Projet({dbLang, language}) {
  return (
    <div id='Portfolio'>
        <div className="title">
            <h3>{dbLang.title}</h3>
            <p>{dbLang.intro}</p>
        </div>
        <Swiper style={{zIndex: 0}}>
                {data.map((data,index) =>
                <SwiperSlide key={index}>
                    <Item data={data} language={language}/>
                </SwiperSlide>)}
            </Swiper>
    </div>
  )
}
