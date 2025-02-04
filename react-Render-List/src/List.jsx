

import propTypes from "prop-types"








function List(props) {

    const category = props.category;
    const itemList = props.items;

    // fruits.sort((a,b) => a.name.localeCompare(b.name)); // Alphabetical

    // fruits.sort((a,b) => b.name.localeCompare(a.name)); // Reverse-Alphabetical
    // fruits.sort((a,b) => a.calories-b.calories); // Numeric Order

    // fruits.sort((a,b) => b.calories-a.calories); //Reverse Numeric Order

    // const listItems= fruits.map(fruits => <li key={fruits.id}>
    //     {fruits.name} :&nbsp; <b>{fruits.calories}</b></li>)



    // const lowCalFruits =fruits.filter(fruit=> fruit.calories < 100);

    // const listItems= lowCalFruits.map(lowCalFruits => <li key={lowCalFruits.id}>
    //     {lowCalFruits.name} :&nbsp; <b>{lowCalFruits.calories}</b></li>);



    // const highCalFruits =fruits.filter(fruit=> fruit.calories > 100);

    // const listItems= highCalFruits.map(highCalFruits => <li key={highCalFruits.id}>
    //     {highCalFruits.name} :&nbsp; <b>{highCalFruits.calories}</b></li>);


    const listItems = itemList.map(items => <li key={items.id}>
        {items.name} :&nbsp; <b>{items.calories}</b></li>);



    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>

    );

}


List.defaultProps = {
    category: "Category",
    items: [],
}
List.propTypes = {
    category: propTypes.String,

    items: propTypes.arrayOf(
        propTypes.shape
            (
                {
                    id: propTypes.number,
                    name: propTypes.string,
                    calories: propTypes.number, 
                }
            )
        )

}


export default List