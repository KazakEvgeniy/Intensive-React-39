
import React, { Component } from "react";
import "./form2.css";

class Lesson2 extends Component {
	constructor(props) {
		super(props);
		this.inputFocus = React.createRef();
		this.state = {
			text: "",
			disabled: false,
		}

	}

	// поиск строки "реакт"

	onValueChange = (e) => {
		e.preventDefault();
		this.setState(() => {

			let valueStr = e.target.value;

			if (valueStr) {
				return {
					disabled: valueStr.split(" ").some(item => item === "реакт"),
					text: valueStr
				}
			} return { text: valueStr }
		})
	}

	// Фокус на инпут

	handleClick = () => {
		this.inputFocus.current.focus();
	}


	render() {
		const { text, disabled } = this.state;
		const { title } = this.props;

		return (
			<>
				<div className="wrapper">
					<form className="Form">
						<h1>{title}</h1>
						<div className="Form-wrapper">
							<div className="Form-wrapper-item">
								<label htmlFor="name">Text:</label>
								<input
									ref={this.inputFocus}
									className="Form-input"
									onChange={this.onValueChange}
									name="text"
									value={text}
									type="text" />
							</div>
						</div>

					</form>
					<button
						onClick={this.handleClick}
						className="Form-btn" >btnFocus
					</button>
					<button
						disabled={disabled}
						onClick={this.counterPlus}
						className="Form-btn">Button
					</button>
				</div>

			</>
		)
	}
}

export default Lesson2;