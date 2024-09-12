import { useState } from 'react'
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

  const addShoppingList = (shoppingList) => {
    let tempList = shoppingLists;
    tempList.push(shoppingList);
    setShoppingLists(tempList);
  }
  
  const addItem = (item, shoppingList) => {
    let tempList = shoppingList;
    tempList.push(item);
    setShoppingList(tempList);
  }

  switch (showContent) {
    case WELCOME: {
      content = <Lists addShoppingList={() => setShowContent(ADDITEM)}/>
      break;
    }
    case SHOPPINGLIST: {
      content = <ShoppingList />
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
