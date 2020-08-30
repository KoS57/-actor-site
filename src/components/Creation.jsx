import React from 'react'
import s from './Creation.module.css'
import vop from '../foto/vop.png'
import role from '../foto/role.png'
import wintera from '../foto/wintera.png'
import anti from '../foto/anti.png'
import podol from '../foto/podol.png'
import gitara from '../foto/gitara.png'
import role2 from '../foto/role2.png'





const Creation = () => {
    return (<div className={s.creat_1}>
        <div className={s.foto}>
            <img src={vop} alt="" />
        </div>
        <div className={s.foto}>
            <img src={wintera} alt="" />
        </div>
        <div className={s.foto}>
            <img src={role} alt="" />
        </div>


        <div className={s.foto}>
            <img src={anti} alt="" />
        </div>
        <div className={s.foto}>
            <img src={podol} alt="" />
        </div>
        <div className={s.foto}>
            <img src={gitara} alt="" />
        </div>
        <div className={s.bigfoto}>
        <div className={s.fotoFace}>
            <img src={role2} alt="" />
            </div>
        </div>
        </div>
    )
}


export default Creation