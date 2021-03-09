import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import index from 'pages/index';
import detail from 'pages/detail';
interface IMenuGlobal {
    id: string;
    name: string;
    path: string;
    component?: () => JSX.Element;
    children?: IMenuGlobal[];
}

const menuGlobal: IMenuGlobal[] = [
    {
        id: 'app',
        name: 'app',
        path: '/',
        component: index,
    },
    {
        id: 'detail',
        name: 'detail',
        path: '/detail',
        component: detail,
        children: [],
    },
];

function renderRouter(menu: IMenuGlobal, pre = '') {
    const { id, path, children, component } = menu;
    if (children) {
        return (
            <Switch key={id}>
                {children.map(child => {
                    return renderRouter(child, path);
                })}
            </Switch>
        );
    }
    return <Route key={id} path={pre + path} exact component={component} />;
}

function RouterConfig() {
    return (
        <Router>
            <Switch>
                {menuGlobal.map((menu: IMenuGlobal) => {
                    return renderRouter(menu);
                })}
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default RouterConfig;
