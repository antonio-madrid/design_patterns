function fibonnaciMemoized() {
    let cache: { [key: number]: number } = {};

    return function fib(n: number): number {
        if (n in cache){
            return cache[n];
        } else {
            if (n < 2) {
                cache[n] = n;
                return n;
            } else {
                cache[n] = fib(n - 1) + fib(n - 2);
                return cache[n];
            }
        }
    }
}

const fibonnaci = fibonnaciMemoized();

console.log(fibonnaci(10)); // 55
console.log(fibonnaci(50)); // 12586269025