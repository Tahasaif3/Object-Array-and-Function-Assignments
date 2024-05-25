var inventory = [];
var product1 = {
    name: "Iphone 15 pro max",
    model: "A2651",
    cost: 500000,
    quantity: 4000,
};
var product2 = {
    name: "Watch Ultra ",
    model: "A22270",
    cost: 200000,
    quantity: 2000,
};
var product3 = {
    name: "MacBook Pro M1",
    model: "A2442",
    cost: 400000,
    quantity: 2500,
};
inventory.push(product1);
inventory.push(product2);
inventory.push(product3);
console.log("The quantity of Third product is (".concat(inventory[2].name, "): ").concat(inventory[2].quantity));
var product4 = {
    name: "Samsung S24 Ultra",
    model: "S2245",
    cost: 500000,
    quantity: 5000,
};
inventory.push(product4);
console.log("Fourth product details: Name - ".concat(inventory[3].name, ",Model - ").concat(inventory[3].model, ",Cost - ").concat(inventory[3].cost, ",Quantity - ").concat(inventory[3].quantity));
console.log("Current Inventory");
inventory.forEach(function (product, index) {
    console.log("Product ".concat(index + 1, ": Name - ").concat(product.name, ": , Model - ").concat(product.model, ": , Cost - ").concat(product.cost, ": , Quantity - ").concat(product.quantity, ":"));
});
