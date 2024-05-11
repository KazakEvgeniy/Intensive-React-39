
const Item = (props) => {
	const { name, age, salary, num } = props;
	return (

		<li className="user">
			<p>Номер по списку: {num}</p>
			<div className="name">Имя: {name}</div>
			<div className="age">Возраст: {age}</div>
			<div className="salary">З/п: {salary}$</div>
		</li>

	)
}

export default Item;