import React, {components} from 'react';

const navbarStyle = {
    borderRadius: '0',
    border: '1px solid #000'
}

const Navbar = () =>{
    return(
        <nav className="navbar navbar-inverse" style={navbarStyle}>
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>                        
                    </button>
                    <a className="navbar-brand" href="/">UniCom</a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li><a href="/">Home</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar