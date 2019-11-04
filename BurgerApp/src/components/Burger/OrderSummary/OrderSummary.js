import React from 'react';

import Auxiliar from '../../../hoc/Auxiliar';
import Button from '../../UI/Button/Button';

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
            <p><strong>Total Price: ${props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button click={props.purchaseCancel} btnType="Danger">CANCEL</Button>
            <Button click={props.purchaseContinue} btnType="Success">CONTINUE</Button>
        </Auxiliar>
    );

};

export default orderSummary;