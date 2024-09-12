import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShoppingList from './Components/ShoppingList';
import AddItem from './Components/AddItem';
import Lists from './Components/Lists';

function App() {
  let content = null;
  const [shoppingLists, setShoppingLists] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  const WELCOME ='welcome', ADDITEM= 'add_item', SHOPPINGLIST = 'shoppinglist'; 
  const [showContent, setShowContent] = useState(WELCOME);
  const [addNewShoppingList, setNewAddShoppingList] = useState(false);

  const saveShoppingList = (shoppingList) => {
    let tempList = shoppingLists;
    tempList.push(shoppingList);
    setShoppingLists(tempList);
  }
  
  const addItem = (item, shoppingList) => {
    let tempList = [...shoppingList, item];
    setShoppingList(tempList)
  }

  const deleteItem = (id, shoppingList) => {
    const tempList = shoppingList.filter((item) => item.id !== id);
    setShoppingList(tempList);
  }

  const CreateDummyData =() => {
    
    setShoppingList(
      [{title: "Banan", done: false, id: 0},
      {title: "Äpple", done: false, id: 1},
      {title: "Kiwi", done: true, id: 2}]

    )
  }
  useEffect(() => {
    CreateDummyData();
  },[])

  switch (showContent) {
    case WELCOME: {
      // console.log("1");
      // console.log(shoppingList);
      content = <Lists addShoppingList={() => setShowContent(SHOPPINGLIST)}/>
      break;
    }
    case SHOPPINGLIST: {
      content = <ShoppingList saveShoppingList={addItem}
      deleteItem={deleteItem}
      shoppingList={shoppingList}/>
      break;
    }
    case ADDITEM: {
      content =  <AddItem />
      break;
    }
    default:
      content =  <Lists />
      break;
  }
  return (
    <>
    {content}
      
    </>
  )
}

export default App
