import StudentsPage from '../StudentsPage/StudentsPage';
import TabSection from '../TabSection/TabSection';
import MainPage from '../StudentsPage/mainCourses/mainCourses';
import './mainBody.css'
import { useState } from 'react';


export default function MainBody(){
    const [tab, setTab] = useState('avaliable')
    return (
    <div>
    <div className='Tab'>
      <div>
        Курсы
      </div>
      <div className='TabDiv'>
        <TabSection active = {tab} onChange = {(current)=>setTab(current)}/>
      </div>
    </div>
    {tab === 'avaliable' &&
      <>
      <StudentsPage/>
      </>
    }
    {tab === 'chosen' &&
      <>
      <MainPage/>
      </>
    }
  </div>
  );
}