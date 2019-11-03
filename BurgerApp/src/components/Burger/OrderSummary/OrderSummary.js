import React from 'react';
import Auxiliar from '../../../hoc/Auxiliar';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map((igKey => {
        return <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey} </span>{props.ingredients[igKey]}</li>
    }));
    

    return (
        <Auxiliar>
            <h3>Your order</h3>
            <p>Super burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Auxiliar>
    );

};

export default orderSummary;