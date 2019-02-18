import React, { Component } from 'react'

const Contant = (props) => {
    return(
        <div className="ui card">
            <div className="content">
                <div className="right floated meta"><i className="angle left icon"></i></div>
                <img className="ui avatar image" src={props.logo}/>{props.userName}
            </div>
            <div className="image">
                <img src={props.coverPhoto} />
            </div>
            <div className="content">
                <a className="header">{props.title}</a>
                <div className="description">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut arcu nisi, mattis sed dolor id, commodo gravida felis. Suspendisse auctor nunc eros, sed sollicitudin dui eleifend non. Sed aliquam arcu mauris, nec bibendum urna hendrerit quis. Quisque in fermentum libero, ut commodo lorem. Nulla dictum metus vitae faucibus volutpat. Vivamus suscipit elementum laoreet. Nullam vel odio nec justo aliquam ultricies vitae venenatis tortor.
                    </p>
                </div>
            </div>
            <div className="extra content">
                <div className="ui animated button" tabIndex="0">
                    <div className="visible content">Read More</div>
                    <div className="hidden content">
                        <i className="right arrow icon"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contant