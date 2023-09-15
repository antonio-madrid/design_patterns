import {Scheduler} from "../subsystems/Scheduler";

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