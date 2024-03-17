const example = document.querySelector('.left-content');
  
example.onclick = function(){
  this.style.color = 'red';
};

const phone = document.querySelector('#phone');

phone.onclick = function(){
    example.innerText = 'Bạn đã bấp vào icon Phone';
};

const speed = document.querySelector('#speed');
speed.onclick = function(){
    example.innerText = 'Bạn đã bấp vào icon Speed';
};

const chat = document.querySelector('#chat');
chat.onclick = function(){
    example.innerText = 'Bạn đã bấp vào icon Chat';
};