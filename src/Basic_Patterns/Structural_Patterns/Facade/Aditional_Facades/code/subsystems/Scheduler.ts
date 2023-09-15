class Scheduler {
    public bookAppointment(date: Date, doctor: string): void {
        console.log(`Booking appointment with ${doctor} for ${date}`);
    }
}

export { Scheduler };