import React, { useState } from "react";
import pic from "./images/img.png";
import Add from "../src/images/Add.png";
import TaskList from "./TaskList";
import "./App.css";
const App = () => {
    const [inputList, setinputList] = useState("");
    const [items, setItems] = useState([]);
    const inputEvent = (event) => {
        setinputList(event.target.value);
    };
    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList]

        });
        setinputList("");
    }
    const taskDone = (id) => {
        setItems(oldItems => {
            return oldItems.filter((arrEl, index) => {
                return index !== id;

            });
        });



    }
    return (
        <>
            <div className="main_div">
                <div className="part1">
                    <div className="img">
                        <img className="imgstyle" src={pic} alt="pic" />
                    </div>
                    <div className="logo">
                        <h1>Task-List</h1>
                    </div>
                    <div className="aim">
                        <span>Do This Now!</span>
                    </div>
                    <div className="Mid_section"></div>
                </div>
                <div className="mid_content">
                    <div className="todolist">

                        <div className="input_feild">
                            <input className="input_section" type="text" placeholder="Add a Task"
                                value={inputList}
                                onChange={inputEvent} />

                            <button className="btn" onClick={listOfItems}><img className="img_style" src={Add} alt="pic2" /></button>
                        </div>
                    </div>
                    <div className="result">
                        <div className="header_h1">
                            <h1>Today's Routine!</h1>
                        </div>
                        <ul>
                            {items.map((itemsvalue, index) => {
                                return <TaskList
                                    key={index}
                                    id={index}
                                    text={itemsvalue}
                                    onSelect={taskDone} />
                            }
                            )}
                        </ul>
                    </div>
                </div>
                <div className="footer">
                    *Click on tick button to remove that task ! 
                </div>
            </div>
        </>
    );
};
export default App;
