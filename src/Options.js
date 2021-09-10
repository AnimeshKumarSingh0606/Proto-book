
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import React, { Component } from "react";
import {DropdownButton,Dropdown} from 'react-bootstrap';
export default class SignUp extends Component {
    render() {
        return (
            

<form>
                <h3>Apply Filters for your Search</h3>

                <div className="form-group">

                <DropdownButton id="dropdown-basic-button" className="form-control  "  title="1. Select Which Semester You Studing in">
                    <Dropdown.Item href="#/action-1">1st Semester</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">2nd Semester</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">3rd Semester</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">4th Semester</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">5th Semester</Dropdown.Item>
                </DropdownButton>
                </div>
                <br/>
                <div className="form-group">

                <DropdownButton id="dropdown-basic-button" className="form-control "  title="2. Select branch You Currently studing in">
                    <Dropdown.Item href="#/action-1">Computer Science and Engineering</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Information Technology</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Mechanical Engineering</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Civil Engineering</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Chemical Engineering</Dropdown.Item>
                </DropdownButton>
                </div>
                <br/>
                <div className="form-group">

                <DropdownButton id="dropdown-basic-button" className="form-control "  title="3. University you are Currently studing in">
                    <Dropdown.Item href="#/action-1">College Of Engineering and Technology</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">ITER Jagamara Khandagiri Bhubaneswar</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">KIIT University Patia-202 Bhubaneswar</Dropdown.Item>
                </DropdownButton>
                </div>
                    <br/>
                <button type="submit" className="btn btn-danger btn-lg btn-block Search">Apply Filters</button>
                <p className="forgot-password text-right " >
                    Use Services at your own Convinience .
                </p>
            </form>
            
        );
    }
}