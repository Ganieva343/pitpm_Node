const Emitter = require('events');
let emitter = new Emitter();
let eventName = 'greet';
emitter.on(eventName, function () {
    console.log('Hello all!');
});

emitter.on(eventName, function () {
    console.log('������!');
});

emitter.emit(eventName);


//�������� ���������� �������
emitter.on(eventName, function (data) {
    console.log(data);
});

emitter.emit(eventName, '������ ���!');