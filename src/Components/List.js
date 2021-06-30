import React from "react";

function DoneImg(props){
    if(props.done){
        return <img src="https://messengernews.fb.com/wp-content/uploads/2018/08/checked-checkbox.png" alt="done"></img>
    }
    else {
        return <img src="https://maxcdn.icons8.com/Share/icon/User_Interface/unchecked_checkbox_filled1600.png" alt="undone"></img>
    }
}


function List(props){
    return(
        <ul>
        {props.items.map(item => 
            <li className={item.done?"done item":"item"} key={item.id}>{item.text} 
            <div>
            <button onClick={()=>{
                props.onDone(item)
            }}><DoneImg done={item.done}></DoneImg></button>
            <button onClick={()=>{
                props.onItemDeleted(item)
            }}><img src="http://cdn.onlinewebfonts.com/svg/img_487212.png" alt="delete"></img></button>
            </div>
            </li>
        )}
    </ul>
    )
}
export default List;