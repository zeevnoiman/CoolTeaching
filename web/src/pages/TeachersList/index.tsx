import React, { FormEvent, useState } from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import Select from '../../components/Select';
import './styles.css';
import api from '../../services/api';



function TeachersList(){

  const [teachers, setTeachers] = useState([])
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(ev: FormEvent){
    ev.preventDefault();
    console.log(subject, week_day, time);
    
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    })

    setTeachers(response.data)

  };

  return (
    <div id="page-teacher-list">
      <PageHeader title='Those are the disponible teachers'>
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select options={[
             {value: 'Art', label: 'Art'},
             {value: 'Cauculus', label: 'Cauculus'},
             {value: 'Computer Arquitecture', label: 'Computer Arquitecture'},
             {value: 'History', label: 'History'},
             {value: 'Data Structure', label: 'Data Structure'},
             {value: 'Algorithms', label: 'Algorithms'},
             {value: 'Compilers', label: 'Compilers'},
           ]}
           onChange={ev => {setSubject(ev.target.value)}}
           value={subject}
          name='subject' 
          label='Subject'></Select>
         <Select options={[
             {value: '0', label: 'Sunday'},
             {value: '1', label: 'Monday'},
             {value: '2', label: 'Tuesday'},
             {value: '3', label: 'Wednesday'},
             {value: '4', label: 'Thursday'},
             {value: '5', label: 'Friday'},
             {value: '6', label: 'Saturday'},
           ]}
           onChange={ev => {setWeekDay(ev.target.value)}}
           value={week_day}
          name='week-day' 
          label='Week day'></Select>
         <Input onChange={ev => {setTime(ev.target.value)}}
           value={time} type='time' name='time' label='Time' ></Input>
         
         <button type='submit'>
           Find
         </button>
        </form>
      </PageHeader>  

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.user_id} teacher={teacher }/>
        })}
      </main>
    </div>
  );
}

export default TeachersList;