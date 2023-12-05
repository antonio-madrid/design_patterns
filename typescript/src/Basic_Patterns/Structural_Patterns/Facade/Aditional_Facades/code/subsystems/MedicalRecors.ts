class MedicalRecors {
    public updateRecord(patientId: string, details: string): void {
        console.log(`Updating medical record for ${patientId} with ${details}`);
    }
}

export { MedicalRecors };