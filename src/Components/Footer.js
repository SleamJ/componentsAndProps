import React, { Component } from 'react';

const footerstyle = {
    margin: '0',
    marginTop: '50px',
    borderRadius: '0',
    border: '1px solid black'
}

const Footer = () => {
    return(
        <footer className="navbar navbar-inverse" style={footerstyle}>
            <ul className="nav navbar-nav">
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
            </ul>
            <p className="navbar-text">Some text</p>
        </footer>
    );
}

export default Footer