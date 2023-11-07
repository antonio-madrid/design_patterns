interface Employee {
    getRole(): string;
    addSubordinate?(employee: Employee): void;
    getSubordinates?(): Employee[];
}

export { Employee };