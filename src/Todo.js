import React, { useEffect } from "react";
import "./Todo.css"
import List from "./Components/List";
import TodoForm from "./Components/TodoForm";
import Item from "./Components/Item";


function Todo(props){
    const [items,setItems] = React.useState([]);
    function onAddItem(text){
      let it = new Item(text);  
      setItems([...items,it])
        
    }
    function onItemDeleted(item){
        let fileteredItems = items.filter(it=>it.id != item.id);
        setItems(fileteredItems);
    }
    function onDone(item){
       let updatedItems = items.map(it=>{
           if(it.id === item.id){
               it.done = !it.done;
           }
           return it;
       })
           setItems(updatedItems)
    }
    return(
        <div className="Container"> 
        <h1>To Do</h1>
        <TodoForm onAddItem={onAddItem}></TodoForm>
        <List onDone={onDone} onItemDeleted={onItemDeleted}items={items}></List>
        </div>
    )
}

export default Todo;