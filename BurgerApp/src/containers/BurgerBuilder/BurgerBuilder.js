import React, {Component} from 'react';
import Auxiliar from '../../hoc/Auxiliar';

import Burger from '../../components/Burger/Burger'; 

class BurgerBuilder extends Component {
    
    state = {
        ingredients: {
            salad:1,
            bacon:1,
            cheese:2,
            meat:1,
        }
    };

    render () {
        return (
            <Auxiliar>
                <Burger />
                <div>Burger Controlos</div>
            </Auxiliar>
        );
    }
}

export default BurgerBuilder;