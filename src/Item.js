function Item({ item }) {
  let vendingOptions = {
    hotdog: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Hot_dog_with_mustard.png",
    chips: "https://upload.wikimedia.org/wikipedia/commons/6/69/Potato-Chips.jpg",
    soda: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Tumbler_of_cola_with_ice.jpg",
  }
  return (
    <div>
      <img src={vendingOptions[item]}
        alt={item}
        width="300" />
    </div>
  )
}

export default Item;