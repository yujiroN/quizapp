'use strict';



const quiz = [
    {
        question: "タイにある「旅人の聖地」と呼ばれている有名な観光地は？",
        answers: [
            "カオサンロード",
            "ブイビエン通り",
            "ブロードウェイ",
            "スクランブル交差点",
        ],
        correct: "カオサンロード"
    }, {
        question: "インドで有名なスパイスが入ったミルクティーの紅茶は？？",
        answers: [
            "チョイ",
            "リプトン",
            "チャイ",
            "アールグレイ",
        ],
        correct: "チャイ"
    }, {
        question: "旅好きな人の間でバイブル本として人気がある沢木耕太郎氏が書いた小説のタイトルは？",
        answers: [
            "早朝特急",
            "ミッドナイトエクスプレス",
            "かもめ食堂",
            "深夜特急",
        ],
        correct: "深夜特急"
    }, {
        question: "中国、インドについで3番目に人口の多い国は？",
        answers: [
            "インドネシア",
            "アメリカ",
            "フィリピン",
            "ベトナム",
        ],
        correct: "アメリカ"
    }, {
        question: "世界的に見て、一番消費税率が高い国は？",
        answers: [
            "ハンガリー",
            "デンマーク",
            "スペイン",
            "ブラジル",
        ],
        correct: "ハンガリー"
    }
];


const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;




const setupQuiz = function () {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    let buttonLength = $button.length;
    while(buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();





const clickHandler = function(e) {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert("あってるで！");
        score++;
    } else {
        window.alert('間違ってるよ！');
    }

    quizIndex++;

    if (quizIndex < quizLength) {
        setupQuiz();
    } else {
        window.alert("終了!あなたの正解数は" + score + "/" + quizLength + "です。");
    }

}



let handlerIndex = 0;

while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', function(e) {
        clickHandler(e);
    });
    handlerIndex++
}


// タイマー

const totalTime = 15000;
const oldTime = Date.now();


const timeId = setInterval(() => {
    const currentTime = Date.now();

    const diff = currentTime - oldTime;

    const diffSec = totalTime - diff;


    const remainSec = Math.ceil(diffSec / 1000);

    let text = `残り${remainSec}秒`;

    if (diffSec <= 0) {
        clearInterval(timeId);

        text = '終わり！';
    }

    document.querySelector('#log').innerHTML = text;
});