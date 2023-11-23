const fs = require('fs');

let writeableStream = fs.createWriteStream('hello.txt');
writeableStream.write('������ ���!');
writeableStream.write('����������� ������ \n');
writeableStream.end('���������� ������');
let readableStream = fs.createReadStream(
    'hello.txt',
    'utf8'
);


readableStream.on('data', function (chunk) {
    console.log(chunk);
});



let writeableStream2 = fs.createWriteStream('04.10.23.txt');
writeableStream2.write('������ Node.js \n');
writeableStream2.write('������ � ������ \n');
writeableStream2.write('����������� ��������������� \n');
writeableStream2.write('������� ������ � ������ (File System and Streams) \n');
writeableStream2.write('WebSocket � �������� ����� \n');
writeableStream2.write('������������ \n');
writeableStream2.write('���������� � ���������� ��������� \n');
writeableStream2.end('����������� � ���������������)');
let readableStream2 = fs.createReadStream(
    '04.10.23.txt',
    'utf8'
);


readableStream2.on('data', function (chunk) {
    console.log(chunk);
});