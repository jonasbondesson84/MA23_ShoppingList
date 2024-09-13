const Lists = (props) => {

    let currentList = props.shoppingLists;

    return ( 
        <div className="shoppinglists">
            {/* Show all shoppinglists */}
            { currentList &&
                currentList.map((item) => (
                    <div key={item.id}>
                    <p>{item.id}</p>
                    <img src={logo} alt="" onClick={() => {}}/>
                    </div>
                ))
             }
             <p>Lists</p>
            <button onClick={() => {
                
                // props.addNewList();
                 props.addShoppingList();
                
            }
            }>Add shopping list</button>
        </div>
     );
}
 
export default Lists;