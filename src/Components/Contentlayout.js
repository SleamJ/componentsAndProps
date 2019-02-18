import React, { Component } from 'react'
import faker from 'faker'

//cover photo importing
import captainAmerica from '../img/Captain America.jpg'
import ironMan from '../img/Iron Man.jpg'
import thor from '../img/Thor.jpg'
import xMen from '../img/x men.jpg'
import punisher from '../img/punisher.jpg'
import fFour from '../img/fantasticFour.jpg'
import avengers from '../img/avengers.jpg'
import panter from '../img/black panther.jpg'
import hulk from '../img/hulk.jpg'
import strange from '../img/strang.jpg'
import rider from '../img/rider.jpg'
import spider from '../img/spider.jpg'

//component importing
import Contant from './Contant'

let divcontent = {
    
}

const ContentLayout = () => {
    return(
        <div className="ui grid">
            <div className="four wide colum" style={divcontent}>
                <Contant 
                    logo = {faker.image.avatar()}
                    userName = {faker.internet.userName()}
                    coverPhoto = {captainAmerica}
                    title = {faker.name.title()}
                />
            </div>
            <div className="four wide colum" style={divcontent}>
                <Contant 
                    logo = {faker.image.avatar()}
                    userName = {faker.internet.userName()}
                    coverPhoto = {ironMan}
                    title = {faker.name.title()}
                />
            </div>
            <div className="four wide colum" style={divcontent}>
                <Contant 
                    logo = {faker.image.avatar()}
                    userName = {faker.internet.userName()}
                    coverPhoto = {thor}
                    title = {faker.name.title()}
                />
            </div>
            <div className="four wide colum" style={divcontent}>
                <Contant 
                    logo = {faker.image.avatar()}
                    userName = {faker.internet.userName()}
                    coverPhoto = {xMen}
                    title = {faker.name.title()}
                />
            </div>
            <div className="four wide colum" style={divcontent}>
                <Contant 
                    logo = {faker.image.avatar()}
                    userName = {faker.internet.userName()}
                    coverPhoto = {punisher}
                    title = {faker.name.title()}
                />
            </div>
            <div className="four wide colum" style={divcontent}>
                <Contant 
                    logo = {faker.image.avatar()}
                    userName = {faker.internet.userName()}
                    coverPhoto = {fFour}
                    title = {faker.name.title()}
                />
            </div>
            <div className="four wide colum" style={divcontent}>
                <Contant 
                    logo = {faker.image.avatar()}
                    userName = {faker.internet.userName()}
                    coverPhoto = {avengers}
                    title = {faker.name.title()}
                />
            </div>
            <div className="four wide colum" style={divcontent}>
                <Contant 
                    logo = {faker.image.avatar()}
                    userName = {faker.internet.userName()}
                    coverPhoto = {panter}
                    title = {faker.name.title()}
                />
            </div>
            <div className="four wide colum" style={divcontent}>
                <Contant 
                    logo = {faker.image.avatar()}
                    userName = {faker.internet.userName()}
                    coverPhoto = {spider}
                    title = {faker.name.title()}
                />
            </div>
            <div className="four wide colum" style={divcontent}>
                <Contant 
                    logo = {faker.image.avatar()}
                    userName = {faker.internet.userName()}
                    coverPhoto = {rider}
                    title = {faker.name.title()}
                />
            </div>
            <div className="four wide colum" style={divcontent}>
                <Contant 
                    logo = {faker.image.avatar()}
                    userName = {faker.internet.userName()}
                    coverPhoto = {strange}
                    title = {faker.name.title()}
                />
            </div>
            <div className="four wide colum" style={divcontent}>
                <Contant 
                    logo = {faker.image.avatar()}
                    userName = {faker.internet.userName()}
                    coverPhoto = {hulk}
                    title = {faker.name.title()}
                />
            </div>
        </div>  
    );
}

export default ContentLayout