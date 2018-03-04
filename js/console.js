console.groupCollapsed('Mensagem criadas');
console.log('estou escrevendo no console');

console.error('Mensagem error');

console.warn('Mensagem alerta');

var num = 12;

console.assert(num <= 10, 'Numero nao pode ser maior que 10');
console.groupEnd();

console.table([
    [1,2,3],
    [2,4,6]
]);

console.table([
    {nome:'Alura'},
    {nome:'Pedro'}
])