/*
1. Define an array named inventory to store product information.
2. Create three separate objects, each representing a product, with properties like name, 
model, cost, and quantity.
3. Add these product objects to the inventory array using an appropriate array method.
4. Access and log the quantity property of a specific product (e.g., third product) in the 
inventory array.
5. Explore adding and accessing more elements within the inventory array to understand 
how to manage product data.*/

let inventory :{
    name:string,
    model:string,
    cost:number,
    quantity:number,
}[] = [];

let product1 = {
    name:"Iphone 15 pro max",
    model:"A2651",
    cost:500000,
    quantity:4000,
};
let product2 = {
    name:"Watch Ultra ",
    model:"A22270",
    cost:200000,
    quantity:2000,
};
let product3= {
    name:"MacBook Pro M1",
    model:"A2442",
    cost:400000,
    quantity:2500,
};
inventory.push(product1);
inventory.push(product2);
inventory.push(product3);

console.log(`The quantity of Third product is (${inventory[2].name}): ${inventory[2].quantity}`)

let product4 = {
        name:"Samsung S24 Ultra",
        model:"S2245",
        cost:500000,
        quantity:5000,
}
inventory.push(product4);

console.log(`Fourth product details: Name - ${inventory[3].name},Model - ${inventory[3].model},Cost - ${inventory[3].cost},Quantity - ${inventory[3].quantity}`);

console.log("Current Inventory");
inventory.forEach((product , index) => {
    console.log(`Product ${index + 1}: Name - ${product.name}, Model - ${product.model}, Cost - ${product.cost}, Quantity - ${product.quantity}`);
});
