import React, {useState} from 'react';
import Form from '../components/Form';
import Header from '../components/List/Header';
import TaskItem from '../components/TaskItem';

export default function Home() {
  
    const [useList ,setUseList] = useState([]);
    
     
    const taskHandler = (task) => {
        setUseList([...useList,task]);
    };

       


    return (
    <>
        <Header/>
        <Form taskHandler={taskHandler}/>
        {useList.map((task) => {
                return (
                <>
                  <div key={task.id}>
                    <TaskItem task={task} />
                  </div>

                </>
              )

            })}

    </>)

};