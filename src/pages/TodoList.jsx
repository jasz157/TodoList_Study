import React, { useState } from 'react';
import Form from '../components/Form';
import Header from '../components/Header/Header';
import TaskItem from '../components/TaskItem';

export default function Todolist() {

  const [useList, setUseList] = useState([]);


  const addTask = (task) => {
    setUseList([...useList, task]);
  };

  const deleteTask = (id) => {
    let filteredTask = useList.filter((task) => task.id !== id);
    setUseList(filteredTask);
  };






  return (
    <>
      <Header />
      <Form addTask={addTask} />
      <main className='content' style={{ display: 'flex', alignItems: "center", flexDirection: "column" }} >
        {useList.map((task) => {
          return (
            <>
              <div key={task.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  background: 'whitesmoke',
                  marginTop: "10px",
                  width: "50vw",
                  height: '7vh'
                }}>
                <TaskItem task={task} deleteTask={deleteTask} />
              </div>

            </>
          )

        })}
      </main>

    </>)

};