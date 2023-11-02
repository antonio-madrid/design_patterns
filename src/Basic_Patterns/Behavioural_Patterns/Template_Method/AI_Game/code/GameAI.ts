abstract class GameAI {
    /** Template method */
    public takeTurn(): void {
        this.collectResources();
        this.buildStructures();
        this.buildUnits();
        this.attack();
        this.sendScouts(this.getScoutPosition());
        this.sendWarriors(this.getWarriorPosition());
    }

    protected collectResources() {
        console.log("Recopilando recursos genéricos.");
    }

    protected buildStructures() {
        console.log("Construyendo estructuras genéricas.");
    }

    protected buildUnits() {
        console.log("Construyendo unidades genéricas.");
    }

    protected abstract attack(): void;

    protected sendScouts(position: string) {
        console.log(`Enviando exploradores a ${position}.`);
    }

    protected sendWarriors(position: string) {
        console.log(`Enviando guerreros a ${position}.`);
    }

    protected abstract getScoutPosition(): string;

    protected abstract getWarriorPosition(): string;
}

export { GameAI };