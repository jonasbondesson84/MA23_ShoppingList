import { useState } from "react";
import AddItem from "./AddItem";
import logo from '../assets/react.svg'

const ShoppingList = (props) => {

    console.log(props.shoppingList);
    const currentList = props.shoppingList;
    const [title, setTitle] = useState("");
    const newId = currentList.length > 0 ? currentList[currentList.length-1].id +1 : 0;
    

    const newItem = (title, newId) => {
        return {title: title, done: false, id: newId};
    }
    

    return ( 
        <div className="shoppinglist">
             <div className="add">
            <p>Add item</p>
            <input type="text" onInput={e=> setTitle(e.target.value)}/>
            <button onClick={() => {props.saveShoppingList(newItem(title, newId), currentList)}}>ADD</button>
        </div>
             { currentList &&
                currentList.map((item) => (
                    <div key={item.id}>
                    <p>{item.title}</p>
                    <img src={logo} alt="" onClick={() => {props.deleteItem(item.id, currentList)}}/>
                    </div>
                ))
             }
            
            {/* show specific shoppinglist */}
        </div>
     );
}
 
export default ShoppingList;