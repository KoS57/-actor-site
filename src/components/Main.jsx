import React from 'react'
import main from '../foto/main.png'
import s from './Main.module.css'

const Main = () => {
    return (
    <div className={s.main}>
      
        <div className={s.main_foto}>
            <img src={main} alt="" />
            </div>
            
        </div>
    )
}


export default Main