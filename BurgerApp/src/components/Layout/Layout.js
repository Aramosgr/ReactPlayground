import React from 'react';

import Auxiliar from '../../hoc/Auxiliar';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Auxiliar>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxiliar>
);

export default layout;