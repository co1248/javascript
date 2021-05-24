// 맨 처음 할 일 필요한 요소들을 변수로 가져오기!
var banner = document.getElementById('banner');
var img = document.getElementsByTagName('img');
var toggle = document.getElementById('toggle');
var sound_btn = document.getElementById('sound_btn');

var banner_height = getComputedStyle(banner).height;
// css 선택자에 필요한 속성을 가져올 수 있다.
console.log(banner_height);

var cast = [];

function set_balloon(num) {

    var x = Math.floor(Math.random() * (500 - 10) + 10),
        y = Math.floor(Math.random() * (400 - 120) + 120),
        size = Math.floor(Math.random() * (200 - 100) + 100),
        angle = Math.floor(Math.random() * (360 - 0) + 0),
        speed = Math.random() * (2 - 0) + 0;

    cast[num] = {
        x: x,
        y: -y,
        size: size,
        angle: angle,
        speed: speed
    }
    // 0번째 위치에 값을 초기화 할거다.
    // 중가로는 객체형식으로 필요한 변수와 함수를 정의한다. 
}

function ball_init() {
    for(i = 0; i < img.length; i++) {
        set_balloon(i);
        img[i].style.left = '-9999px'
        img[i].style.top = '-9999px'
    }
}

function animate_balloon() {
    for(i = 0; i < img.length; i++) {
        img[i].style.left = cast[i].x + 'px';
        // css속성을 가져온거라 반드시 단위를 적어줘야 한다.
        img[i].style.top = cast[i].y + 'px';
        img[i].style.transform = 'rotate(' + cast[i].angle + 'deg)';
        // transform 움직임을 구현하는 속성

        if(cast[i].y < parseInt(banner_height)) {
            cast[i].y += 1 + cast[i].speed;
            cast[i].angle += cast[i].speed;
        } else {
            set_balloon(i);
        }
    }
}

ball_init();
setInterval(function(){
    animate_balloon();
},1000/30)
