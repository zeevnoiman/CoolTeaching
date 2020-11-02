import React from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/images/icons/warning.svg';
import './styles.css';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeachersForm(){
  return (
    <div id='page-teacher-form' className='container'>
      <PageHeader title='Great! You want to give classes!'
                  description='The first step is to fullfill this form' />
      <main>
        <fieldset>
          <legend>Your info</legend>
          
         <Input name='name' label='Name'></Input>
         <Input name='avatar' label='Avatar'></Input>
         <Input name='whatsapp' label='Whatsapp'></Input>
         <Textarea name='bio' label='Bio'></Textarea>
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
          name='subject' 
          label='Subject'></Select>
         <Input name='cost' label='Cost per hour'></Input>
        
        </fieldset>
        {/* <fieldset>
          <legend>Your info</legend>
          
         <Input name='name' label='Name'></Input>
         <Input name='avatar' label='Avatar'></Input>
         <Input name='whatsapp' label='Whatsapp'></Input>

        </fieldset> */}

        <footer>
          <p>
            <img src={warningIcon} alt="Important warning"/>
            Important! <br />
            Fill all the fields
          </p>
          <button type='button'>
            Save
          </button>
        </footer>
      </main>
    </div>
  )
}

export default TeachersForm;