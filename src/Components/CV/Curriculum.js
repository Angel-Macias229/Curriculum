import React from "react";
import "../Curriculum.css";
import Degree from '../Degree/Degree';
import Experience from '../Experience/Experience';
import Profile from '../Profile/Profile';
import Technologies from '../Technologies/Technologies';
import Header from "../Header/Header";

export const Curriculum = () => {
    return (
        <div className="CV">
            <Header/>

            <div className="row">
                <div className="column">
                    <Profile/>
                </div>
                            
                <div className="column">
                    <Experience/>
                </div>
            </div>

            <div className='row'>
                <div className="column">
                    <Technologies/>
                </div>
                            
                <div className="column">
                    <Degree/>
                </div>
            </div>
                    
        </div>
    );
};