import React from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';

function TeachersForm(){
  return (
    <div id='page-teacher-form' className='container'>
      <PageHeader title='Great! You want to give classes!'
                  description='The first step is to fullfill this form' />
      <main>
        <fieldset>
          <legend>Your info</legend>
          
          <div className="input-block">
            <label htmlFor="name">Name</label>
            <input type="text" id='name'/>
          </div>

          <div className="input-block">
            <label htmlFor="avatar">Avatar</label>
            <input type="text" id='avatar'/>
          </div>

          <div className="input-block">
            <label htmlFor="whatsapp">Whatsapp</label>
            <input type="text" id='whatsapp'/>
          </div>
        </fieldset>
      </main>
    </div>
  )
}

export default TeachersForm;