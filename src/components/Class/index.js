import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    return (
        <div className="class-item d-flex align-items-center">
            <Link to="/my-classes" className="class-item-thumbnail">
                <img src="../assets/images/img_1.jpg" alt="" />
            </Link>
            <div className="class-item-text">
                <h2><Link to={ `/my-classes/${props.id}/${props.rows.id}`}>{props.rows.name}</Link></h2>
                <span>Pelo Personal Trainner {props.rows.personal_name}</span>
            </div>
        </div>
    );
}