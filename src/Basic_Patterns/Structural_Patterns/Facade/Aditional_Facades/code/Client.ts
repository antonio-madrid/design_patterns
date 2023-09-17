import {AppointmentFacade} from "./Facades/AppointmentFacade";
import {MedicalFacade} from "./Facades/MedicalFacade";
import {PaymentFacade} from "./Facades/PaymentFacade";

const appointment = new AppointmentFacade();
const medical = new MedicalFacade();
const payment = new PaymentFacade();

appointment.arrangeAppointment(new Date("2023-10-01"), "Dr Michael");

medical.updateMedicalRecord("Madrid Antonio", "Flu");

payment.processBill(15);

console.log("All tasks completed successfully");