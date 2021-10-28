import React from 'react'
import './TaskList.css'
const TaskList = (props) => {
    
    return (
        <>
            <div className="list_style">
                <div className="li_style">
                    <li>{props.text}</li>
                </div>
                <div className="icon_style">
                <i class="fas fa-check-circle"
                onClick={() =>{
                    props.onSelect(props.id)
                }}></i>
                </div>

            </div>



        </>
    )
}
export default TaskList;