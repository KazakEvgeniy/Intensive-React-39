import "./app.css";
import { Component } from "react";
import Lesson1 from "../components/Lesson1/form/form";
import Lesson2 from "../components/Lesson2/form2/form2";
import Items from "../components/Lesson2/items/items";

class App extends Component {
	constructor(props) {
		super(props)
		this.data = [
			{ name: "John", salary: 500, age: 25, id: 0 },
			{ name: "Alex", salary: 2500, age: 30, id: 1 },
			{ name: "Carl", salary: 5000, age: 35, id: 2 },
		]
	}


	render() {

		return (
			<div className="App" >
				<Lesson1 title="lesson" />
				<Lesson2 title="lesson-2" />
				<Items data={this.data} />
			</div>
		)
	}

}

export default App;