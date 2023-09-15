import {
    MedicalRecors
} from "../subsystems/MedicalRecors";

class MedicalFacade {
    private medicalRecords: MedicalRecors;

    constructor() {
        this.medicalRecords = new MedicalRecors();
    }

    public updateMedicalRecord(patientId: string, details: string): void {
        this.medicalRecords.updateRecord(patientId, details);
        console.log(`Medical record for ${patientId} successfully updated`);
    }
}

export { MedicalFacade };