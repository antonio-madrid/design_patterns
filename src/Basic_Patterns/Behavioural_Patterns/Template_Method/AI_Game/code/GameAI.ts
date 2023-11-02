abstract class GameAI {
    /** Template method */
    public takeTurn(): void {
        this.collectResources();
        this.buildStructures();
        this.buildUnits();
        this.attack();
        this.sendScouts('la posición mas cercana');
        this.sendWarriors('la posición enemiga');
    }

    public collectResources() {
        console.log("Recopilando recursos genéricos.");
    }

    public buildStructures() {
        console.log("Construyendo estructuras genéricas.");
    }

    public buildUnits() {
        console.log("Construyendo unidades genéricas.");
    }

    public abstract attack(): void;

    public sendScouts(position: string) {
        console.log(`Enviando exploradores a ${position}.`);
    }

    public sendWarriors(position: string) {
        console.log(`Enviando guerreros a ${position}.`);
    }
}

export { GameAI };