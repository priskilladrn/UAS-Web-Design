import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Nav.css';

export default class Nav extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            style: false
        }
    }
    responsive = () => {
        this.setState({style: !this.state.style})
    }

    render() {
        let respon

        if(!this.state.style){
            respon = "kategori"
        }else{
            respon = "responsive"
        }

        return (
            <div id="navigasi">
                <div className="navBar">
                    <h1><Link exact to="/"><span className="logo">XYZ</span> NEWS</Link></h1>
                    <div className={respon}>
                        <NavLink to="/General"><p>General</p></NavLink>
                        <NavLink to="/Business"><p>Business</p></NavLink>
                        <NavLink to="/Entertainment"><p>Entertainment</p></NavLink>
                        <NavLink to="/Health"><p>Health</p></NavLink>
                        <NavLink to="/Science"><p>Science</p></NavLink>
                        <NavLink to="/Sport"><p>Sport</p></NavLink>
                        <NavLink to="/Technology"><p>Technology</p></NavLink>
                    </div>
                    <div onClick={this.responsive} id="hamburger">
                        <img src="https://cdn.discordapp.com/attachments/823483865892126721/866685773305348156/menu-button-of-three-horizontal-lines_1.png" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}
