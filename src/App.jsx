import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShoppingList from './Components/ShoppingList';

import Lists from './Components/Lists';

function App() {

  const [shoppingLists, setShoppingLists] = useState([]);
  let newID = shoppingLists.length > 0 ? shoppingLists[shoppingLists.length-1].id +1 : 0;
  const [selectedList, setSelectedList] = useState(null)

  const createNewList = () => {
    let newList = {id: newID, title: "My list", list: []};
    let tempList = [...shoppingLists, newList];
    setShoppingLists(tempList);
  }

  const addNewItem = (item, selectedList) => {
    let updatedList = [...selectedList.list, item];
    let tempList = {id: selectedList.id, list: updatedList};
    setSelectedList(tempList);
  }

  const removeItem = (id, selectedList) => {
    const updatedItemList = selectedList.list.filter((item) => item.id !== id);
    const updatedList = {id: selectedList.id, list: updatedItemList};
    setSelectedList(updatedList);
  }

  const updateItem = (item, selectedList) => {

  }

  const checkItem = (item, selectedList) => {
    const updatedItemList = selectedList.list.map(oldItem => 
          oldItem.id === item.id 
            ? { ...oldItem, done: !oldItem.done } 
            : oldItem 
        );
    const updatedList = {id: selectedList.id, list: updatedItemList};
       
        setSelectedList(updatedList);
  }

  const saveList = (selectedList) => {
    let updatedList = shoppingLists;
    let index = shoppingLists.findIndex((shoppinglist) => 
      shoppinglist.id == selectedList.id);
    updatedList[index] = selectedList;
    setShoppingLists(updatedList);
  }

  return (
    <>
    { !selectedList &&
      
      <div> <button onClick={() => {createNewList()}}>Add list</button>
    
    <Lists shoppingLists={shoppingLists} setSelectedList={setSelectedList}/></div>}
    {selectedList && <div><ShoppingList selectedList= {selectedList} addNewItem={addNewItem} removeItem={removeItem} checkItem={checkItem} setSelectedList={setSelectedList} saveList={saveList} />
    </div>}
    </>
  )
};

export default App


