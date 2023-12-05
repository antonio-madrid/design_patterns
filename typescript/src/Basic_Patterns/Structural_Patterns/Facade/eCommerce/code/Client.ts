import {OrderFacade} from "src/Basic_Patterns/Structural_Patterns/Facade/eCommerce/code/OrderFacade";

const order = new OrderFacade();
order.placeOrder('Laptop', 1000, '123 Some Street');