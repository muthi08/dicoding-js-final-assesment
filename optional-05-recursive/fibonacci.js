function fibonacci(n) {
    if (n === 0) {
        return [0];
    } else if (n === 1) {
        return [0, 1];
    } else {
        const deretFibonacci = fibonacci(n - 1);
        deretFibonacci.push(deretFibonacci[deretFibonacci.length - 1] + deretFibonacci[deretFibonacci.length - 2]);
        return deretFibonacci;
    }
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
