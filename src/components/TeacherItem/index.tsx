import React from 'react';

import './style.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';


export default function TeacherItem(){
    return(
        
<article className='teacher-item'>
<header>
  <img src="https://avatars3.githubusercontent.com/u/29253592?s=400&u=44a8f8c5017aae60ef4e7dcf41d6a0886a04665a&v=4" alt="avatar"/>
  <div>
    <strong>
      Daniel Najman
    </strong>
    <span>
      Quimica
    </span>
  </div>
</header>

<p>
  Enstusiasta das meljores tecnologias de quimica avancada
  <br/><br/>
  Apaixonado por ajudar outras pessoas, dar aulas e dar vida a sua aulas atraves de novas experiencias.
</p>

<footer>
  <p>
    Preco por hora
    <strong>20 shekel</strong>
  </p>
    <button type='button'>
      <img src={whatsappIcon} alt="whatsapp"/>
      Enter in touch
    </button>
</footer>
</article>
    )
}
