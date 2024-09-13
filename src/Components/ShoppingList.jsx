import { useState } from "react";

import logo from '../assets/react.svg'

const ShoppingList = (props) => {

    const selectedList = props.selectedList || [];
    const [title, setTitle] = useState("");
    const newId = selectedList.list.length > 0 ? selectedList.list[selectedList.list.length-1].id +1 : 0;
    const newItem = (title, newId) => {
        return {title: title, done: false, id: newId};
    }
    
    return ( 
        <div className="shoppinglist">
              <div className="add">
            <p>Add item</p>
            <input type="text" onInput={e=> setTitle(e.target.value)}/>
            <button onClick={() => {
                console.log(selectedList.id);
                props.addNewItem(newItem(title, newId), selectedList);
                }}>ADD</button> 
                </div>
            {selectedList.list.map(item => (
                <div key={item.id}>
                <p>{item.title} {item.id}
                <input type="checkbox" name="" id="" checked={item.done} onChange={() => {
                    props.checkItem(item, selectedList);
                }}/>
                {item.done ? <p>done</p>: <p>not done</p>}
                </p>
                <img src={logo} alt="" onClick={() => {
                    props.removeItem(item.id, selectedList);
                }}/>

                </div>
            ))}
            <p></p>
            <button onClick={() => {
                props.saveList(selectedList);
         props.setSelectedList(null);
      }}>Back</button>
        </div>
     );
}
 
export default ShoppingList;
