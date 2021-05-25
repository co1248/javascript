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

function bgm_init() {
    var bgm = new Audio();
    bgm.src = 'images/bgm.mp3';
    bgm.loop = true;
    // bgm.play();
    document.body.appendChild(bgm);
    // 요소의 위치를 설정해줘야 한다. append 뒤쪽에 추가
    // 바디 테크에 마지막으로 자식을 추가
}

ball_init();
setInterval(function(){
    animate_balloon();
},1000/30);

bgm_init();
sound_btn.setAttribute('src','images/sound_on.png');
sound_btn.onclick = function(event) {
    var attr = sound_btn.getAttribute('class');
    // getAttribute 특정속성에 이름을 가진 값을 가져와주세요.
    var bgm = document.getElementsByTagName('audio');
    
    if(attr == 'active') { //음악을 끈다.
        sound_btn.removeAttribute('class');
        sound_btn.setAttribute('src','images/sound_on.png');
        // setAttribute 속성을 바꾼다
        bgm[0].pause();
    } else { //음악을 켠다.
        sound_btn.setAttribute('class','active');
        sound_btn.setAttribute('src','images/sound_off.png');
        bgm[0].play();
    }
    event.stopPropagation();
    // 이벤트를 더이상 아래쪽으로 버블링 하지말고 멈춰라
    // 이거 안써주면 하위 a테그에 이벤트가 적용된다. 그래서 무조건 이벤트끝에 써주기
}

toggle.onclick = function(event) {
    var attr = banner.getAttribute('class');
    if(attr == 'active') { //배너를 닫는다.
        banner.removeAttribute('class');
        toggle.innerHTML = "배너 열기";
        return false;
        // a태그에 클릭이벤트 쓸때는 반드시 사용한다.
    } else {
        banner.setAttribute('class','active');
        toggle.innerHTML = "배너 닫기";
        return false;
    }
    event.stopPropagation();
}

banner.onclick = function() {
    window.open('https://www.naver.com/');
}
