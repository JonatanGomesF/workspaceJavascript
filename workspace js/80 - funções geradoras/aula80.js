function* geradora1() {
    yield 'valor1';
    yield 'valor2';
    yield 'valor3';
}

const g1 = geradora1();
console.log(g1.next())