const fs = require('fs');

let writeableStream = fs.createWriteStream('hello.txt');
writeableStream.write('Привет мир!');
writeableStream.write('Продолжение записи \n');
writeableStream.end('Завершение записи');
let readableStream = fs.createReadStream(
    'hello.txt',
    'utf8'
);


readableStream.on('data', function (chunk) {
    console.log(chunk);
});



let writeableStream2 = fs.createWriteStream('04.10.23.txt');
writeableStream2.write('Основы Node.js \n');
writeableStream2.write('Модули и пакеты \n');
writeableStream2.write('Асинхронное программировани \n');
writeableStream2.write('Система файлов и потоки (File System and Streams) \n');
writeableStream2.write('WebSocket и реальное время \n');
writeableStream2.write('Тестирование \n');
writeableStream2.write('Деплоймент и управление серверами \n');
writeableStream2.end('Оптимизация и масштабирование)');
let readableStream2 = fs.createReadStream(
    '04.10.23.txt',
    'utf8'
);


readableStream2.on('data', function (chunk) {
    console.log(chunk);
});