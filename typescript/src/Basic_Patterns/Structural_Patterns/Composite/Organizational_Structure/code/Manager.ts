import {Employee} from "src/Basic_Patterns/Structural_Patterns/Composite/Organizational_Structure/code/Employee";

class Manager implements Employee {
    private subordinates: Employee[] = [];

    constructor(private role: string) {}


    getRole(): string {
        return this.role;
    }

    addSubordinate(employee: Employee) {
        this.subordinates.push(employee);
    }

    getSubordinates(): Employee[] {
        return this.subordinates;
    }
}

export { Manager };