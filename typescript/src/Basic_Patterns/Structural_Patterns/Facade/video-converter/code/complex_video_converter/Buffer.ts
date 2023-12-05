class Buffer {
    constructor(public data: any) {
    }

    public static from(data: any): Buffer {
        return new Buffer(data);
    }
}

export { Buffer };