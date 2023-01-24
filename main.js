const quizText = document.getElementById("quiz-text");
const choice1 = document.getElementById("choice-1");
const choice2 = document.getElementById("choice-2");
const choice3 = document.getElementById("choice-3");
const feedback = document.getElementById("feedback");

const quiz = {
    text: "いきなりクイズ！この星の名前は何でしょう？",
    choices: [{
            text: "アメリカ",
            feedback: "残念！惜しい・・・",
        },
        {
            text: "イタリア",
            feedback: "正解！イタリアです・こんなところ行ってみないねWW",
        },
        {
            text: "ノルウェー",
            feedback: "残念！正解にしてあげたいけど・・・",
        },
    ],
};

const reloadQuiz = function() {
    quizText.textContent = "Q. " + quiz.text;

    choice1.textContent = quiz.choices[0].text;
    choice2.textContent = quiz.choices[1].text;
    choice3.textContent = quiz.choices[2].text;
};

// choiceNumber番目の選択肢を選択
const choose = function(choiceNumber) {
    // フィードバックを表示
    feedback.textContent = quiz.choices[choiceNumber].feedback;
};

choice1.onclick = function() {
    // 0 番目の選択肢を選択
    choose(0);
};
choice2.onclick = function() {
    // 1 番目の選択肢を選択
    choose(1);
};
choice3.onclick = function() {
    // 2 番目の選択肢を選択
    choose(2);
};

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz();
ß;