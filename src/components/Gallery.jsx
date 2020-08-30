import React from 'react'
import s from './Gallery.module.css'
import pf_1 from '../foto/pf_1.png'
import pf_2 from '../foto/pf_2.png'
import pf_3 from '../foto/pf_3.png'
import pf_4 from '../foto/pf_4.png'
import pf_5 from '../foto/pf_5.png'
import pf_6 from '../foto/pf_6.png'
import pf_7 from '../foto/pf_7.png'
import pf_8 from '../foto/pf_8.png'
import pf_9 from '../foto/pf_9.png'


const Gallery = () => {
    return (<div className={s.creat_1}>
        <div className={s.foto_1}>
            <img src={pf_1} alt="" />
        </div>
        <div className={s.foto}>
            <img src={pf_2} alt="" />
        </div>
        <div className={s.foto_1}>
            <img src={pf_3} alt="" />
        </div>
        <div className={s.foto}>
            <img src={pf_4} alt="" />
        </div>
        <div className={s.foto}>
            <img src={pf_5} alt="" />
        </div>
        <div className={s.foto}>
            <img src={pf_6} alt="" />
        </div>
        <div className={s.foto}>
            <img src={pf_7} alt="" />
        </div>
        <div className={s.foto}>
            <img src={pf_8} alt="" />
        </div>
        <div className={s.foto}>
            <img src={pf_9} alt="" />
        </div>
    </div>
    )
}


export default Gallery