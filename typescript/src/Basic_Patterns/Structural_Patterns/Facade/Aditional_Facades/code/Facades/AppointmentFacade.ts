import {Scheduler} from "src/Basic_Patterns/Structural_Patterns/Facade/Aditional_Facades/code/subsystems/Scheduler";

class AppointmentFacade {
    private scheduler: Scheduler;

    constructor() {
        this.scheduler = new Scheduler();
    }

    public arrangeAppointment(date: Date, doctor: string): void {
        this.scheduler.bookAppointment(date, doctor);
        console.log(`Appointment with ${doctor} for ${date} successfully arranged`);
    }
}

export { AppointmentFacade };