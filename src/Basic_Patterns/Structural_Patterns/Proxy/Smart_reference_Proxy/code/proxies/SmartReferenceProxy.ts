import {ServiceInterface} from "../interfaces/ServiceInterface";
import {HeavyService} from "../services/HeavyService";

class SmartReferenceProxy implements ServiceInterface {
    private heavyService: HeavyService | null = null;
    private smartReferences: number = 0;

    public addService(): HeavyService {
        if (!this.heavyService) {
            this.heavyService = new HeavyService();
        }
        this.smartReferences++;
        return this.heavyService;
    }

    public exec(): void {
        this.heavyService?.exec();
    }

    /** It frees the space heavy Service occupied space when there is no references pointing to it. */
    public freeService(): void {
        this.smartReferences--;
        if (this.smartReferences === 0 && this.heavyService) {
            console.log('Dismissing the heavy service...');
            this.heavyService = null;
        }
    }
}

export { SmartReferenceProxy };