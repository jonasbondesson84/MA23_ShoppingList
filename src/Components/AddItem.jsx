import { useState } from "react";

const AddItem = (props) => {

    const [item, setItem] = useState(null);

    return ( 
        // add an item to a shoppinglist
        <div className="add">
            <p>Add item</p>
            <input type="text" onInput={e=> setItem(e.target.value)}/>
            <button onClick={() => {props.saveList(props.shoppingList, item)}}>ADD</button>
        </div>
        
     );
}
 
export default AddItem;
