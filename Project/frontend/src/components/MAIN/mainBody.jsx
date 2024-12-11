import StudentsPage from '../StudentsPage/StudentsPage';
import TabSection from '../TabSection/TabSection';
import MainPage from '../StudentsPage/mainCourses/mainCourses';
import './mainBody.css'
import { useState } from 'react';


export default function MainBody(){
    const [tab, setTab] = useState('avaliable')
    return (
    <div className='Back'>
    <div className='ttab'>
      <div className='TabD'>
        Курсы
      </div>
      
    </div>
    <div className='TabEl'>
      <div>
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