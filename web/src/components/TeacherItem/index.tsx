import React from 'react';

import './style.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

export interface Teacher{
    avatar: string,
    bio: string,
    whatsapp: string,
    user_id:number,
    subject: string,
    name: string, 
    cost: number
}

interface TeacherItemProps{
  teacher: Teacher
}



const TeacherItem: React.FC<TeacherItemProps> = ({teacher})=>{
  
  function createNewConnection(){
    api.post('connections', {
      user_id: teacher.user_id,
    })
  }
  return(
        
<article className='teacher-item'>
<header>
  <img src={teacher.avatar} alt="avatar"/>
  <div>
    <strong>
      {teacher.name}
    </strong>
    <span>
      {teacher.subject}
    </span>
  </div>
</header>

<p>
  {teacher.bio}
</p>

<footer>
  <p>
    Preco por hora
    <strong>{teacher.cost}</strong>
  </p>
    <a target='_blank' onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
      <img src={whatsappIcon} alt="whatsapp"/>
      Enter in touch
    </a>
</footer>
</article>
    )
}

export default TeacherItem