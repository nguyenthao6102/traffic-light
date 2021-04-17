import "./TrafficLight.css";
import React, { Component } from "react";
import classNames from "classnames";

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

export default class TrafficLight extends Component {
	render() {
		const { currentColor } = this.props;
		console.log("Rending...", currentColor);
		return (
			<div className="TrafficLight">
				<div
					className={classNames("bulb", "red", {
						active: currentColor === RED,
					})}
				></div>
				<div
					className={classNames("bulb", "orange", {
						active: currentColor === ORANGE,
					})}
				></div>
				<div
					className={classNames("bulb", "green", {
						active: currentColor === GREEN,
					})}
				></div>
			</div>
		);
	}
}
