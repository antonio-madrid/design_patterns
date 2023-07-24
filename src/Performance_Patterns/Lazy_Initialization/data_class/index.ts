class Data {
    private _data: string[] | undefined;

    public constructor() {
        console.log('This object object creation does not initialize any data.')
    }

    public get data(): string[] {
        // it only creates the data the very first time
        if (!this._data) {
            console.log('Loading data for very first time...');
            this._data = ['large', 'amount', 'of', 'data'];

            // Processing time simulation
            let i: number = 0;
            while (i < 1e9) i++;
        } else {
            console.log('Data was already loaded after the first call.')
        }
        return this._data;
    }
}

let data_object = new Data();
console.log('Data object created.');
// No data loaded yet

// When accessing the data for very first time, data is created
console.log(data_object.data);

// later data calls just retrieve the already loaded data
console.log(data_object.data);