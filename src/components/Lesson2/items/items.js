import Item from "../item/item"


const Items = ({ data }) => {

	const elements = data.map((item, i) => {

		return (
			<Item
				num={i + 1}
				key={item.id}
				{...item}
			/>
		)
	})


	return (
		<div className="wrapper">
			<ul>
				{elements}
			</ul>
		</div>

	)
}

export default Items;