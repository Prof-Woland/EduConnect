import Header from '../Header/Header';
import StudentsPage from '../StudentsPage/StudentsPage';
import Footer from '../Footer/Footer'
import TabSection from '../TabSection/TabSection';
import MainPage from '../StudentsPage/mainCourses/mainCourses';
import './mainBody.css'
import { useState } from 'react';


export default function Body(){
    const [tab, setTab] = useState('avaliable')
    return (
    <div>
    <Header/>
    <div className='Tab'>
      <div>
        Курсы
      </div>
      <div className='TabDiv'>
        <TabSection active = {tab} onChange = {(current)=>setTab(current)}/>
      </div>
    </div>
    <div>
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
    <Footer/>
  </div>
  );
}