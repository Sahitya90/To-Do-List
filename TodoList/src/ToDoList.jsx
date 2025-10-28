import { useState } from "react";

function ToDoList(){

    const[tasks, setTasks] =  useState([]);
    const[newTask, setnewTask] =  useState("");


    //this function handles, whatever that happens to the to-do list
    function handleInputChange(event){
        setnewTask(event.target.value);

    }

    //function to add a task in the to-do list
    function addTask(){

        if(newTask.trim() !== ""){

            const newTodoObject = {
                text : newTask,
                isDone : false
            };

            setTasks(T => [...T, newTodoObject]);
            setnewTask("");
        }
    }

    //function to check the task as completed
    function checkTask(index){

        const updatedTasks = tasks.map((task, i) => {
            if(i==index){
                return{
                    ...task, isDone: !task.isDone
                };
            }
                return task;
            });

            setTasks(updatedTasks);
        }
    

    //function to remove a task from the to-do list
    function deleteTask(index){

        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);

    }

    //function to move a task up in the organized list order
    function MoveTaskUp(index){

        if(index>0){
            const upTasks = [...tasks];
            [upTasks[index], upTasks[index-1]]=[upTasks[index-1], upTasks[index]];
            
            setTasks(upTasks);
        }
        

    }

    //function to move a task down in the organized list order
    function MoveTaskDown(index){

         if(index<tasks.length - 1){
            const upTasks = [...tasks];
            [upTasks[index], upTasks[index+1]]=[upTasks[index+1], upTasks[index]];
            
            setTasks(upTasks);
        }

    }

    return(
        <div className="todolist">
            <h1> To-Do List ✏️</h1>

            <div>
                <input  type="text"
                        placeholder="Enter a task..."
                        value={newTask}
                        onChange={handleInputChange}

                />
                <button className="Add" onClick={addTask}>Add</button>
            </div>

            {tasks.length >0 && (<ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className="span"
                              style ={{filter : task.isDone ? 'blur(2px)' : 'none'}}
                        >
                            {task.text}
                        </span>
                        <button className="check" onClick={() => checkTask(index)}>
                            ✅
                        </button>
                        <button className="delete" onClick={() => deleteTask(index)}>
                             ❌
                        </button>
                        <button className="move-up" onClick={() => MoveTaskUp(index)}>
                             👆
                        </button>
                        <button className="move-down" onClick={() => MoveTaskDown(index)}>
                             👇
                        </button>
                    </li>)}
                

            </ol>)
            }
        </div>

    );

}
export default ToDoList