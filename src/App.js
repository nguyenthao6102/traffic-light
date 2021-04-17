import "./App.css";
import TrafficLight from "./components/TrafficLight";
import React, { Component } from "react";

const RED = 0;
const ORANGE = 1;
const GREEN = 2;
export default class App extends Component {
	constructor() {
		super();

		this.state = {
			currentColor: RED,
		};
		setInterval(() => {
			this.setState({
				currentColor: this.getNextColor(this.state.currentColor),
			});
		}, 1000);
	}
	getNextColor(color) {
		switch (color) {
			case RED:
				return ORANGE;
			case ORANGE:
				return GREEN;
			default:
				return RED;
		}
	}
	render() {
		return (
			<div>
				<TrafficLight currentColor={this.state.currentColor} />
			</div>
		);
	}
}
