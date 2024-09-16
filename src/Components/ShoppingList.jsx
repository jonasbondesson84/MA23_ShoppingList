import { useState } from "react";

import deleteLogo from '../assets/delete.svg'
import addLogo from '../assets/add_circle_outline.svg'
import editLogo from '../assets/mode_edit.svg'
import saveLogo from '../assets/check_circle.svg'
const ShoppingList = (props) => {

    const selectedList = props.selectedList || [];
    const [title, setTitle] = useState("");
    const [listTitle, setListTitle] = useState(selectedList.title);
    const newId = selectedList.list.length > 0 ? selectedList.list[selectedList.list.length-1].id +1 : 0;
    const [editMode, setEditMode] = useState(false);
    const newItem = (title, newId) => {
        return {title: title, done: false, id: newId};
    }
    
    return ( 
        <div className="shoppinglist">
            
            <div className="post-it" id="long-list">
                    <input type="text" value={listTitle} id="shopping-title" onChange={e => {setListTitle(e.target.value)}}/>
                    {selectedList.list.map(item => (
                    <div key={item.id} className="item">
                        
                        <input type="checkbox" name="" id="checkbox" checked={item.done} onChange={() => {
                            props.checkItem(item, selectedList);
                        }}/>
                        <p><input type="" className="item-title" value={item.title} readOnly={!editMode} id="shopping-item" onChange={e => {setTitle(e.target.value)}}/>
                        {!editMode &&
                        <img src={editLogo} alt="" onClick={() => {
                            setEditMode(true);
                        }}/>
                        
                        }
                        {editMode && <img src={saveLogo} onClick={() => {
                            setEditMode(false);
                        }}/>}
                        {!editMode && <img src={deleteLogo} alt="" id="delete-image" onClick={() => {
                            props.removeItem(item.id, selectedList);
                        }}/>}
                        </p>
                    </div>
                ))}
                <div className="add">
                {/* <p>Add title</p> */}
                <input type="text" id="add-field" onInput={e=> setTitle(e.target.value)}/>
                <img src={addLogo} id="add-button" alt="" onClick={() => {
                    props.addNewItem(newItem(title, newId), selectedList);
                }}/>
                {/* <button onClick={() => {
                    props.addNewItem(newItem(title, newId), selectedList);
                }}>ADD</button>  */}
            </div>
            </div>
            
            <button onClick={() => {
                selectedList.title = listTitle;
                console.log(selectedList.title);
                props.saveList(selectedList);
         props.setSelectedList(null);
      }}>Back</button>
        </div>
     );
}
 
export default ShoppingList;
