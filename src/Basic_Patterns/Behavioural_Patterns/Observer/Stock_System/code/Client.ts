import {StockManager} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Stock_System/code/subjects/StockManager";
import {
    EmailAlertStockObserver
} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Stock_System/code/observers/EmailAlertStockObserver";
import {StockDisplay} from "src/Basic_Patterns/Behavioural_Patterns/Observer/Stock_System/code/observers/StockDisplay";

const stockManager = new StockManager();
const emailAlerts = new EmailAlertStockObserver();
const stockDisplay = new StockDisplay();

stockManager.subscribe(emailAlerts);
stockManager.subscribe(stockDisplay);

stockManager.addProduct('TypeScript Handbook', 10);
stockManager.addProduct('JavaScript Handbook', 20);
