import React from 'react'
import biograf from '../foto/biograf.jpg'
import s from './Biograf.module.css'
import { Jumbotron,Container } from 'react-bootstrap'

const Biograf=()=>{
    return(
        <Container className={s.biograf}>
<div className={s.biogFoto}>
    <img src={biograf} alt=""/>
</div>
<Jumbotron> 
    <h2>Какой то текст</h2>
    <p>Какой то текст Какой то текст Какой то текст Какой то текст Какой то текст Какой то текст</p>
    </Jumbotron>
        </Container>
    )
}


export default Biograf