const Lists = ({addShoppingList}) => {
    return ( 
        <div className="shoppinglists">
            <button onClick={addShoppingList}>Add shopping list</button>
        </div>
     );
}
 
export default Lists;