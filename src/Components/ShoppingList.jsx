import { useState } from "react";

import deleteLogo from '../assets/delete.svg'
import addLogo from '../assets/add_circle_outline.svg'
import editLogo from '../assets/mode_edit.svg'
import saveLogo from '../assets/check_circle.svg'
const ShoppingList = ({selectedList, addNewItem, removeItem, toggleEditMode, checkItem, setSelectedList, saveList, updateItem}) => {

    const currentList = selectedList || [];
    const [title, setTitle] = useState("");
    const [listTitle, setListTitle] = useState(currentList.title);
    const newId = currentList.list.length > 0 ? currentList.list[currentList.list.length-1].id +1 : 0;
    const [editMode, setEditMode] = useState(false);
    const newItem = (title, newId) => {
        return {title: title, done: false, id: newId, editMode: false};
    }

    
    
    return ( 
        <div className="shoppinglist">
            
            <div className="post-it" id="long-list">
                    <input type="text" value={listTitle} id="shopping-title" onChange={e => {setListTitle(e.target.value)}}/>
                    {currentList.list.map(item => (
                    <div key={item.id} className="item">
                        
                        <input type="checkbox" name="" id="checkbox" checked={item.done} onChange={() => {
                            checkItem(item, currentList);
                        }}/>
                        <p>
                        
                        <input type="" className="item-title" value={item.title} readOnly={!item.editMode} id="shopping-item" onChange={e => {updateItem(e, item, currentList)}}/>
                        {!item.editMode &&
                        <img src={editLogo} alt="" onClick={() => {
                            toggleEditMode(item, currentList);
                        }}/>
                        
                        }
                        {item.editMode && <img src={saveLogo} onClick={() => {
                            toggleEditMode(item,currentList);
                        }}/>}
                        {!item.editMode && <img src={deleteLogo} alt="" id="delete-image" onClick={() => {
                            removeItem(item.id, currentList);
                        }}/>}
                        </p>
                    </div>
                ))
                    
                }
                <div className="add">
                {/* <p>Add title</p> */}
                <input type="text" id="add-field" onInput={e=> setTitle(e.target.value)}/>
                <img src={addLogo} id="add-button" alt="" onClick={() => {
                    addNewItem(newItem(title, newId), currentList);
                }}/>
                {/* <button onClick={() => {
                    props.addNewItem(newItem(title, newId), selectedList);
                }}>ADD</button>  */}
            </div>
            </div>
            
            <button onClick={() => {
                currentList.title = listTitle;
                console.log(currentList.title);
                saveList(currentList);
         setSelectedList(null);
      }}>Back</button>
        </div>
     );
}
 
export default ShoppingList;
