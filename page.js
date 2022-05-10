import React from "react";
import './page.css';
function Page(){
    return(
        <div className="pa">
        <div>
            <ul className="ge">
                <li>Front End!</li>
                <li>Back End!</li>
                <li>DataBase! </li>
                <li>Career Path</li>
            </ul>
            <hr/>
        </div>
        <div className="swag">
            <h1>Benefits of Working at KLAY</h1>
            <hr/>
            <p>At KLAY, We believe, Happy Employees = Happy Children = Happy Customers!
            Therefore, we provide benefits beyond the basic necessities like medical insurance & flexibility that support a balanced
            life.
            </p>
            <hr/>
        </div>
        <div>
            <ul className="current">
                <li>Staff Child Care</li>
                <li>Medical Insurance/ESI</li>
                <li>Provident Fund</li>
                <li>Annual Bonus</li>
                <li>Attendance</li>
            </ul>
            <hr/>
        </div>
        <div className="para">
            <p>In order to enable employees to bring their children to work and provide them with world class education, we have an employee-child education policy in
            place. Employees with young children who fit into the age group and schooling programmes offered in the Centre they are working at, can enrol their
            child in to their age specific programmes. The fee for the schooling/day care program will be subsidised.</p>
        </div>
        </div>
    )
}
export default Page;
