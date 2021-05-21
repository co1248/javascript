// 객체 변수를 선언한다.
var inp = document.forms['cal'];
// 도큐먼트의 아래에 있는 폼테크를 가져와라. 배열형태로!
// s가 붙어있는 형태는 90프로이상 배열로 가져온다.
// ['cal'] 숫자로 0써도 되고 이름으로 가져와도 된다.
var input = document.getElementsByTagName("input");
// 같은 이름의 테그를 다 가져올때 쓴다.
var cls_btn = document.getElementsByClassName('cls_btn')[0];
var result_btn = document.getElementsByClassName('result_btn')[0];
// 배열 형태로 가져온다. 쓸때 꼭 인덱스 번호 붙여줘야 한다.
function clr() {
    inp['result'].value = 0;
}
// 계산기 초기화
function calc(value) {
    if(inp['result'].value == 0 || inp['result'].value == '입력오류') {
        inp['result'].value = '';
    }
    inp['result'].value += value;
}
// 계산기 입력 처리
function my_result() {
    var result = document.forms['cal']['result'];
    var cal = eval(result.value);
    inp['result'].value = cal;
}
// 계산결과 처리
for(i = 0; i < input.length; i++) {
    if(input[i].value != '=' || input[i].value != 'clear') {
        input[i].onclick = function() {
                calc(this.value);
        }
    }
}
cls_btn.onclick = function() {
    clr();
}
result_btn.onclick = function() {
    try {
        my_result();
    } catch(err) {
        var result = inp['result'];
        result.value = '입력오류';
    }
}
