import { Component } from "react";
import './form.css'


class Lesson1 extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			age: "",
			counter: 1
		}
		console.log('Constructor');
	}



	componentDidMount() {
		console.log('componentDidMount');
	}

	componentDidUpdate() {
		console.log('componentDidUpdate');
	}

	componentWillUnmount() {
		console.log('componentWillUnmount');
	}



	onVelueChange = (e) => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value,
		})

	}

	counterPlus = () => {
		this.setState(state => ({
			counter: state.counter + 1
		}))

	}


	render() {
		console.log('Render');
		const { name, age, counter } = this.state;
		const { title } = this.props;

		return (
			<>
				<div className="wrapper">
					<form className="Form">
						<h1>{title} {counter}</h1>
						<div className="Form-wrapper">
							<div className="Form-wrapper-item">
								<label htmlFor="name">Name:</label>
								<input
									className="Form-input"
									onChange={this.onVelueChange}
									name="name"
									value={name}
									type="text" />

							</div>
							<div className="Form-wrapper-item">
								<label htmlFor="name">Age:</label>
								<input
									className="Form-input"
									onChange={this.onVelueChange}
									name="age"
									value={age}
									type="text" />
							</div>
						</div>
						<button className="Form-btn">btnSubmit</button>
					</form>
					<button onClick={this.counterPlus} className="Form-btn">btnPlus</button>
				</div>

			</>
		)
	}
}

export default Lesson1;