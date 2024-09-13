import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShoppingList from './Components/ShoppingList';

import Lists from './Components/Lists';

function App() {
  let content = null;
  const [shoppingLists, setShoppingLists] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  const WELCOME ='welcome', SHOPPINGLIST = 'shoppinglist'; 
  const [showContent, setShowContent] = useState(WELCOME);

  // const saveShoppingList = (shoppingList) => {
  //   let tempList = [];
  //   // console.log(`newID: ${newID}`);
  //   if(shoppingLists.find((list) => list.id === shoppingList.id ) === null) {
  //     // console.log(`newID: {newID}`);
  //     newList = {id: newID, list: shoppingList};
  //     tempList = [...shoppingLists, newList];
  //   } else {
  //     const removedList = shoppingLists.filter((list) => list.id !== shoppingList.id);
      
  //     tempList = [...removedList, shoppingList];
  //   }
    
  //   setShoppingLists(tempList);
  // };
  
  const addItem = (item, shoppingList) => {
    console.log(`shoppinglist: ${shoppingList}`);
     let tempList = [...shoppingList, item];
     setShoppingList(tempList)
  };

  const deleteItem = (id, shoppingList) => {
    const tempList = shoppingList.filter((item) => item.id !== id);
    setShoppingList(tempList);
  };

  const checkItem = (item, shoppingList) => {
    // Skapa en ny kopia av shoppingList
    const updatedList = shoppingList.map(oldItem => 
      oldItem.id === item.id 
        ? { ...oldItem, done: !oldItem.done } // Uppdatera objektet om ID:n matchar
        : oldItem // Annars behåll objektet oförändrat
    );
  
    // Uppdatera state med den nya listan
    setShoppingList(updatedList);
  };

  // const createNewList = () => {
    
  //   const newID = shoppingLists.length > 0 ? shoppingLists.length + 1 : 0;
  //   const newShoppingList = { id: newID, list: [] }; // Skapar en ny lista med id och tom array
  //   console.log(newShoppingList);
  
  //   setShoppingList(newShoppingList); // Sätt den nya listan i state
  //   setShowContent(SHOPPINGLIST);
  // };

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
      content = <Lists 
      // addNewList ={() => setShoppingList(createNewList)}
      addShoppingList={() => setShowContent(SHOPPINGLIST)}
      
      shoppingLists= {shoppingLists}
      />
      
      break;
    }
    case SHOPPINGLIST: {
      content = <ShoppingList
      shoppingList= {shoppingList}
      addItemToList={addItem}
      deleteItem={deleteItem}
      checkItem = {checkItem}
      // saveShoppingList={saveShoppingList}
      
      
      />
      break;
    }
    
    default:
      content =  <Lists addNewList ={() => setShoppingList(createNewList)}
      addShoppingList={() => setShowContent(SHOPPINGLIST)}
      
      shoppingLists= {shoppingLists}/>
      break;
  }
  return (
    <>
    {content}
     <button onClick={() => {console.log(showContent)}}>klick</button>
    </>
  )
};

export default App
