import React from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Select from '../../components/Select';
import './styles.css';

function TeachersList(){
  return (
    <div id="page-teacher-list">
      <PageHeader title='Those are the disponible teachers'>
        <form id="search-teachers">
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
         <Select options={[
             {value: '0', label: 'Sunday'},
             {value: '1', label: 'Monday'},
             {value: '2', label: 'Tuesday'},
             {value: '3', label: 'Wednesday'},
             {value: '4', label: 'Thursday'},
             {value: '5', label: 'Friday'},
             {value: '6', label: 'Saturday'},
           ]}
          name='week-day' 
          label='Week day'></Select>
         <Input type='time' name='time' label='Time' ></Input>
         
        </form>
      </PageHeader>  

      <main>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
      </main>
    </div>
  );
}

export default TeachersList;