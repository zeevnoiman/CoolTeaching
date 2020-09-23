import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';

import './styles.css';

function TeachersList(){
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title='Those are the disponible teachers'>
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject"/>
          </div>
          <div className="input-block">
            <label htmlFor="week-day">Week Day</label>
            <input type="text" id="week-day"/>
          </div>
          <div className="input-block">
            <label htmlFor="time">Time</label>
            <input type="text" id="time"/>
          </div>
        </form>
      </PageHeader>  
    </div>
  );
}

export default TeachersList;