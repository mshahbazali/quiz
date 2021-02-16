var questionData = [{

    question1: "What does HTML stand for?",
    answer1: "Home Tool Markup Language",
    answer2: "Hyperlinks and text Markup Language",
    answer3: "Hyper Text Markup Language",
    collect: "3"
},
{

    question1: "Who is making the Web standards?",
    answer1: "Google",
    answer2: "Microsoft",
    answer3: "All World Wide Web Consortium",
    collect: "3"
},
{

    question1: "Who is making the Web sshhab?",
    answer1: "Google",
    answer2: "Microsoft",
    answer3: "All World Wide Web Consortium",
    collect: "3"
},
{

    question1: "Who is making the Web sshhab?",
    answer1: "Google",
    answer2: "Microsoft",
    answer3: "All World Wide Web Consortium",
    collect: "3"
},
{

    question1: "Who is making the Web HTML?",
    answer1: "Google",
    answer2: "Microsoft",
    answer3: "All World Wide Web Consortium",
    collect: "3"
},
{

    question1: "Who is making the Web HTML?",
    answer1: "Google",
    answer2: "Microsoft",
    answer3: "All World Wide Web Consortium",
    collect: "3"
},
{

    question1: "Who is making the Web HTML?",
    answer1: "Google",
    answer2: "Microsoft",
    answer3: "All World Wide Web Consortium",
    collect: "3"
},
{

    question1: "Who is making the Web HTML?",
    answer1: "Google",
    answer2: "Microsoft",
    answer3: "All World Wide Web Consortium",
    collect: "3"
},
{

    question1: "Who is making the Web HTML?",
    answer1: "Google",
    answer2: "Microsoft",
    answer3: "All World Wide Web Consortium",
    collect: "3"
},
{

    question1: "Who is making the Web HTML?",
    answer1: "Google",
    answer2: "Microsoft",
    answer3: "All World Wide Web Consortium",
    collect: "3"
},
{

    question1: "Who is making the Web HTML?",
    answer1: "Google",
    answer2: "Microsoft",
    answer3: "All World Wide Web Consortium",
    collect: "3"
}]
var count = 0;
var score = 10;
var question = document.getElementById("question")
question.innerText = questionData[count].question1;

var answer1 = document.getElementById("answer1")
answer1.innerText = questionData[count].answer1;
var answer2 = document.getElementById("answer2")
answer2.innerText = questionData[count].answer2;
var answer3 = document.getElementById("answer3")
answer3.innerText = questionData[count].answer3;
var nextBtn = document.getElementById("nextbtn")
var allBtn = document.getElementsByClassName("optionbtn")
var optionInput1 = document.getElementById("optionInput1")
var optionInput2 = document.getElementById("optionInput2")
var optionInput3 = document.getElementById("optionInput3")
var countQ = document.getElementById("countq")



// console.log(classAnswer.checked == true)


function checkBtn() {


    if (count < questionData.length - 1 || count >= questionData.length && optionInput1.checked == true || optionInput2.checked == true || optionInput3.checked == true) {

        count++;
        score * 10 / 10
        var question = document.getElementById("question")
        question.innerText = questionData[count].question1;
        var answer1 = document.getElementById("answer1")
        answer1.innerText = questionData[count].answer1;
        var answer2 = document.getElementById("answer2")
        answer2.innerText = questionData[count].answer2;
        var answer3 = document.getElementById("answer3")
        answer3.innerText = questionData[count].answer3;
        optionInput1.checked = false;
        optionInput2.checked = false;
        optionInput3.checked = false;
        countQ.innerHTML =   count+ " " +"to "
    }
    else if (questionData.length == 4) {

        nextBtn.style.display = "none"

    }

    else {
        alert("Please Select Option")

    }
}

var mint = 3
var sec = 59
var minth = document.getElementById("mint")
var sech = document.getElementById("sec")
var interval;


function timer() {

    sec--
    sech.innerHTML = " " + sec
    minth.innerHTML = mint + " " + ":" + " "
    if (sec <= 0) {
        mint--
        minth.innerHTML = mint
        sec = 59
        console.log(msec)
    }

}
setInterval(timer, 1000);

















