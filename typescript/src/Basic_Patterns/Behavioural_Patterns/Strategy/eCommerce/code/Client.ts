import {ShoppingCart} from "src/Basic_Patterns/Behavioural_Patterns/Strategy/eCommerce/code/ShoppingCart";
import {
    BlackFridayDiscount
} from "src/Basic_Patterns/Behavioural_Patterns/Strategy/eCommerce/code/Strategies/BlackFridayDiscount";
import {
    StudentDiscount
} from "src/Basic_Patterns/Behavioural_Patterns/Strategy/eCommerce/code/Strategies/StudentDiscount";
import {NoDiscount} from "src/Basic_Patterns/Behavioural_Patterns/Strategy/eCommerce/code/Strategies/NoDiscount";

const cart1 = new ShoppingCart(new BlackFridayDiscount());
console.log(cart1.calculateTotalPrice(100)); // 50

cart1.setDiscountStrategy(new StudentDiscount());
console.log(cart1.calculateTotalPrice(100)); // 90

cart1.setDiscountStrategy(new NoDiscount());
console.log(cart1.calculateTotalPrice(100)); // 100

cart1.setDiscountStrategy(new BlackFridayDiscount());
console.log(cart1.calculateTotalPrice(100)); // 50