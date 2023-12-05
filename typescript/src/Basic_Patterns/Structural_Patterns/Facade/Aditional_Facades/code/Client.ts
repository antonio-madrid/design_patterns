import {AppointmentFacade} from "src/Basic_Patterns/Structural_Patterns/Facade/Aditional_Facades/code/Facades/AppointmentFacade";
import {MedicalFacade} from "src/Basic_Patterns/Structural_Patterns/Facade/Aditional_Facades/code/Facades/MedicalFacade";
import {PaymentFacade} from "src/Basic_Patterns/Structural_Patterns/Facade/Aditional_Facades/code/Facades/PaymentFacade";

const appointment = new AppointmentFacade();
const medical = new MedicalFacade();
const payment = new PaymentFacade();

appointment.arrangeAppointment(new Date("2023-10-01"), "Dr Michael");

medical.updateMedicalRecord("Madrid Antonio", "Flu");

payment.processBill(15);

console.log("All tasks completed successfully");