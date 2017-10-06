import React from 'react';
import reactDOM from 'react-dom';

const Header = props => <h1>Hello React</h1>;

reactDOM.render(
    <Header/>,
    document.getElementById("root")
);