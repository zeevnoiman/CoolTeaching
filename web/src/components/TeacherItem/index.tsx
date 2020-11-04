import React from 'react';

import './style.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

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
    <a href={`https://wa.me/${teacher.whatsapp}`}>
      <img src={whatsappIcon} alt="whatsapp"/>
      Enter in touch
    </a>
</footer>
</article>
    )
}

export default TeacherItem