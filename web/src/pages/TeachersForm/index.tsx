import React, {FormEvent, useState} from 'react';
import {useHistory} from 'react-router-dom';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/images/icons/warning.svg';
import './styles.css';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';

function TeachersForm(){
  const history = useHistory()

  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')
  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState('')
  const [scheduledItems, setScheduledItems] = useState([
    {
      week_day: 0,
      from: '',
      to: ''
    }
  ]);
  
  function addSchedule(){
    const newScheduledItems =[...scheduledItems, {
      week_day: 0,
      from: '',
      to: ''
    }];

    setScheduledItems(newScheduledItems);
  };

  function handleCreateClass(ev: FormEvent){
    ev.preventDefault();
      console.log(
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        scheduledItems
      )

      api.post('classes', {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduledItems
      }).then(() => {
        console.log('Cadastro realizado com sucesso')
        history.push('/')
      }).catch(() => {console.log('Error');
      })

  };

  function setScheduleItemValue(position: number, field: string, value: string){
    const dataScheduledItems = scheduledItems.map((scheduledItem, index) => {
      if(index === position){
        return {...scheduledItem, [field]: value}
      }
      return scheduledItem;
    });

    setScheduledItems(dataScheduledItems)
  }

  return (
    <div id='page-teacher-form' className='container'>
      <PageHeader title='Great! You want to give classes!'
                  description='The first step is to fullfill this form' />
      <main>
        <form onSubmit={handleCreateClass}>
        <fieldset>
          <legend>Your info</legend>
          
         <Input name='name' label='Name' value={name} onChange={(ev) => {setName(ev.target.value)}}></Input>
         <Input name='avatar' label='Avatar'  value={avatar} onChange={(ev) => {setAvatar(ev.target.value)}}></Input>
         <Input name='whatsapp' label='Whatsapp'  value={whatsapp} onChange={(ev) => {setWhatsapp(ev.target.value)}}></Input>
         <Textarea name='bio' label='Bio'  value={bio} onChange={(ev) => {setBio(ev.target.value)}}></Textarea>
        </fieldset>
        <fieldset>
          <legend>About the class</legend>
          
         <Select options={[
           {value: 'Art', label: 'Art'},
           {value: 'Art', label: 'Art'},
           {value: 'Art', label: 'Art'},
           {value: 'Art', label: 'Art'},
           {value: 'Art', label: 'Art'},
           {value: 'Art', label: 'Art'},
           {value: 'Art', label: 'Art'},
         ]}
         value={subject}
         onChange={(ev) => {setSubject(ev.target.value)}}
          name='subject' 
          label='Subject'></Select>
         <Input name='cost' label='Cost per hour' value={cost} onChange={(ev => {setCost(ev.target.value)})}></Input>
        
        </fieldset>
        <fieldset>
          <legend>
            Disponible Hours
            <button type='button' onClick={addSchedule}> + New Hour</button>
          </legend>

          {
            scheduledItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select options={[
                     {value: '0', label: 'Sunday'},
                     {value: '1', label: 'Monday'},
                     {value: '2', label: 'Tuesday'},
                     {value: '3', label: 'Wednesday'},
                     {value: '4', label: 'Thursday'},
                     {value: '5', label: 'Friday'},
                     {value: '6', label: 'Saturday'},
                   ]}
                   onChange={ev => setScheduleItemValue(index, 'week_day', ev.target.value )}
                  value={scheduleItem.week_day}
                   name='week-day' 
                  label='Week day'></Select>
                  <Input value={scheduleItem.from} onChange={ev => setScheduleItemValue(index, 'from', ev.target.value )} name='from' label='from' type='time'></Input>
                  <Input value={scheduleItem.to} onChange={ev => setScheduleItemValue(index, 'to', ev.target.value )} name='to' label='to' type='time'></Input>
                </div>
               
              )
            })
          }
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Important warning"/>
            Important! <br />
            Fill all the fields
          </p>
          <button onClick={handleCreateClass} type='button'>
            Save
          </button>
        </footer>
        </form>
      </main>
    </div>
  )
}

export default TeachersForm;