const Lists = (props) => {

    let currentList = props.shoppingLists;

    return ( 
    
    <div className="shoppingLists">{props.shoppingLists.map((list) => (
        <div key={list.id} className="post-it" onClick={() => {props.setSelectedList(list);}}>
            {list.title}
        </div>
        ))}
    </div>
     );
}
 
export default Lists;