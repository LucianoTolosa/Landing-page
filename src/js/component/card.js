import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card" style={{ width: "16rem" }}>
			<img src={props.img} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card s content.
				</p>
				<a href="#" className="btn btn-primary">
					{props.edad}
				</a>
			</div>
		</div>
	);
}
Card.propTypes = {
	name: PropTypes.string,
	img: PropTypes.string,
	edad: PropTypes.number
};
