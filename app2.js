function Question(text, choice, answer) {
    this.text = text;
    this.choice = choice;
    this.answer = answer;
}
var questions = [
    new Question('다음 중 최초의 웹 브라우저는 ?', ['모자이크', '인터넷익스플로러', '크롬', '네스케이프'], '네스케이프')
];

function Quiz(questions) {
    this.score = 0;
    // 점수를 관리한다.
    this.questions = questions;
    // 질문을 받는다.
    this.questionIndex = 0;
    // 질문의 인덱스를 만든다.           
}

Quiz.prototype.correctAnswer = function(answer) {
    return answer == this.questions[this.questionIndex].answer;
}

var quiz = new Quiz(questions);
// 퀴즈객체를 이용해서 Quiz(questions)변수를 가지고 
function update_quiz() {
    var question = document.getElementById('question');
    var idx = quiz.questionIndex + 1;
    var choice = document.querySelectorAll('.btn');
    // querySelectorAll 속성이 클래스로 되어있는 모든 요소를 가져올 때 사용한다.

    question.innerHTML = '문제' + idx + ") " + quiz.questions[0].text;
    // 폼테그 사이에 넣을 때는 value를 쓴다.

    for(i = 0; i < 4; i++) {
        choice[i].innerHTML = quiz.questions[0].choice[i];
    }
    progress();
}

function progress() {
    var progress = document.getElementById("progress")
    progress.innerHTML = '문제 ' + (quiz.questionIndex + 1) + ' / ' + quiz.questions.length;
}

update_quiz();

var btn = document.querySelectorAll('.btn');
function checkAnswer(i) {
    btn[i].addEventListener('click', function() {
        var answer = btn[i].innerText;
        // innerText 요소가 가진 문자값 가져오기.
        if(quiz.correctAnswer(answer)) {
            alert("정답입니다.");
            quiz.score++;
        } else {
            alert("틀렸습니다.");
        }
        result();
    });
}

for(i = 0; i < 4; i++) {
    checkAnswer(i);
}

function result() {
    var quiz_div = document.getElementById('quiz');
    var per = parseInt((quiz.score*100) / quiz.questions.length);

    var txt = '<h1>결과</h1>' + '<h2 id = "score"> 당신의 점수 : ' + quiz.score + ' / ' + quiz.questions.length + '<br><br>' + per + ' 점</h2>';
    quiz_div.innerHTML = txt;

    if(per >= 80) {
        txt += '<h2 style ="color: red">훌륭합니다.</h2>';
        quiz_div.innerHTML = txt;
    }
}
