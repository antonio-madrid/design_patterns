import {Employee} from "src/Basic_Patterns/Structural_Patterns/Composite/Organizational_Structure/code/Employee";

class Developer implements Employee {
    constructor(private role: string) {}

    getRole(): string {
        return this.role;
    }
}

export { Developer };