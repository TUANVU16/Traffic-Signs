function check(){

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;


    var correct = 0;
    
    if (question1 == "1a"){
        correct++;
    }
    if(question2 == "2a3"){
        correct++;
    }
    if(question3 == "3a2"){
        correct++;
    }
    if(question4 == "4a3"){
        correct++;
    }
    if(question5 == "5a3"){
        correct++;
    }


   

    document.getElementById("number_correct").innerHTML = "you got "+correct+" correct";
}

function myFunction(){
    location.reload();
}