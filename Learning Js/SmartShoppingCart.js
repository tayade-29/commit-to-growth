/**
 Problem 1: Smart Shopping Cart 🛒
Goal: Practise multiple JavaScript concepts in one problem.
Requirements
Create a Product class with the following properties:
- id
- name
- price
- quantity
Then create a ShoppingCart class with a products array and implement these methods:
1. addProduct(product) — Add a product to the cart. If a product with the same id already exists, increase its quantity instead of adding a duplicate.
2. removeProduct(id) — Remove the product with the given ID.
3. getTotalPrice() — Calculate and return the total price of all products, accounting for quantity.
4. getProductsAbovePrice(price) — Return products whose individual price is greater than the given price.
5. applyDiscount(callback) — Accept a callback function that applies a discount to the total price and return the discounted total.
Example usage
const cart = new ShoppingCart();

cart.addProduct(new Product(1, "Laptop", 50000, 1));
cart.addProduct(new Product(2, "Mouse", 1000, 2));
cart.addProduct(new Product(1, "Laptop", 50000, 1));

console.log(cart.getTotalPrice()); // 52000
console.log(cart.getProductsAbovePrice(5000)); // Laptop
console.log(cart.applyDiscount(total => total * 0.9)); // 46800


Rules
- Use classes and objects.
- Use array methods such as filter() where appropriate.
- Use a callback for the discount.
- Handle an empty cart correctly.
- Don't copy the example output directly; make the methods work for different inputs.
Your task: Write the complete code yourself. Start with the Product class, then implement ShoppingCart.
 */

class Product{
    constructor(id,name,price,quantity){
        this.id =id,
        this.name=name,
        this.price=price,
        this.quantity=quantity
    }
}

class ShoppingCart{
    constructor(){
        this.products=[]
    }
    addProduct(product){
        for(let i=0;i<this.products.length;i++){
            if(this.products[i].id ==product.id){
                this.products[i].quantity+=product.quantity;
            }
        } 
        return this.products.push(product);
    }
    getTotalPrice(){
        return this.products.reduce((totalPrice,product) => {
            return totalPrice+(product.price*product.quantity)
        })
    }
    getProductsAbovePrice(price){
       return this.products.filter(this.products, product => product.price>price)
    }
    applyDiscount(callback,discount){
        totalPrice=callback();
        return totalPrice-totalPrice*(discount/100)
    }
}