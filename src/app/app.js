import "./app.css";
import { Component } from "react";
import Lesson1 from "../components/Lesson1/form/form";


class App extends Component {
	// constructor(props) {
	// 	super(props)
	// }


	render() {

		return (
			<div className="App" >
				<Lesson1 title="lesson" />
			</div>
		)
	}

}

export default App;