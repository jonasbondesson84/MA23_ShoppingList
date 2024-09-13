import { useState } from "react";

import logo from '../assets/react.svg'

const ShoppingList = (props) => {

     console.log(props.shoppingList);
    const currentList = props.shoppingList || [];
    const [title, setTitle] = useState("");
    console.log(`currentList: ${currentList}`);
    const newId = currentList != null ? currentList[currentList.length-1].id +1 : 0;
    console.log(newId);
    

    const newItem = (title, newId) => {
        return {title: title, done: false, id: newId};
    }
    

    return ( 
        <div className="shoppinglist">
             <div className="add">
            <p>Add item</p>
            <input type="text" onInput={e=> setTitle(e.target.value)}/>
            <button onClick={() => {
                props.addItemToList(newItem(title, newId), currentList);
                // props.saveShoppingList(currentList);
                }}>ADD</button>
            <button onClick={() => {props.saveShoppingList(currentList)}}>Save</button>
        </div>
             { currentList &&
                currentList.map((item) => (
                    <div key={item.id}>
                    <p>{item.title}
                    <input type="checkbox" name="" id="" checked={item.done} onChange={() => {
                        props.checkItem(item, currentList);
                    }}/>
                    {item.done ? (<p>done</p>): (<p>Not done</p>)}
                    </p>
                    <img src={logo} alt="" onClick={() => {props.deleteItem(item.id, currentList)}}/>
                    </div>
                ))
             }
            
            {/* show specific shoppinglist */}
        </div>
     );
}
 
export default ShoppingList;