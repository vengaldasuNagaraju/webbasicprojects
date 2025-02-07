const quizData =[
    {
        question:"what is mean oop in java?",
        a:"object oriented programming",
        b:"object oudated program",
        c:"oriented object program",
        d:"object of program",
        correct:"a",
    },
    {
        question: "What is the main principle of OOP in Java?",
        a: "Encapsulation, Inheritance, Polymorphism, Abstraction",
        b: "Encapsulation, Compilation, Execution, Debugging",
        c: "Encapsulation, Object, Package, Method",
        d: "None of the above",
        correct: "a"
    },
    {
        question: "Which feature of OOP allows the use of the same method name for different implementations?",
        a: "Encapsulation",
        b: "Abstraction",
        c: "Polymorphism",
        d: "Inheritance",
        correct: "c"
    },
    {
      question: "Which keyword is used for inheritance in Java?",
        a: "extends",
        b: "implements",
        c: "inherits",
        d: "super",
        correct: "a"
    },
    {
        question: "What is encapsulation in Java?",
        a: "Hiding the implementation details and exposing only the necessary parts",
        b: "Binding two classes together",
        c: "Overriding methods in child class",
        d: "None of the above",
        correct: "a"
    },
    {
        question: "Which of the following is NOT a pillar of OOP?",
        a: "Abstraction",
        b: "Encapsulation",
        c: "Compilation",
        d: "Polymorphism",
        correct: "c"
    },
    {
      question: "What is an object in Java?",
        a: "A template for creating classes",
        b: "An instance of a class",
        c: "A function",
        d: "A primitive data type",
        correct: "b"
    },
    {
        question: "Which of these access specifiers allows access from within the same package?",
        a: "private",
        b: "protected",
        c: "default",
        d: "public",
        correct: "c"
    },
    {
      question: "Which keyword is used to prevent inheritance?",
        a: "private",
        b: "protected",
        c: "static",
        d: "final",
        correct: "d"
    },
    {
        question: "What does the 'super' keyword refer to?",
        a: "The child class",
        b: "The parent class",
        c: "The current instance",
        d: "A static method",
        correct: "b"
    },
    {
        question: "Which of the following is a correct constructor in Java?",
        a: "public void Constructor(){}",
        b: "public Constructor(){}",
        c: "void Constructor(){}",
        d: "static Constructor(){}",
        correct: "b"
    },
    {
        question: "What is method overriding?",
        a: "Defining multiple methods with the same name but different parameters",
        b: "Defining a method in a subclass with the same signature as the superclass",
        c: "Hiding private members of a class",
        d: "None of the above",
        correct: "b"
    },
    {
        question: "What is an abstract class in Java?",
        a: "A class that cannot be instantiated and may contain abstract methods",
        b: "A class that contains only abstract methods",
        c: "A class without a constructor",
        d: "A class that is automatically instantiated",
        correct: "a"
    },
    {
        question: "Which of the following is true about an interface in Java?",
        a: "It can contain instance variables",
        b: "It can have implemented methods",
        c: "It can be instantiated",
        d: "It can contain abstract methods",
        correct: "d"
    },
    {
        question: "Which feature of OOP provides code reusability?",
        a: "Polymorphism",
        b: "Inheritance",
        c: "Encapsulation",
        d: "Abstraction",
        correct: "b"
    },
    {
        question: "Which operator is used to allocate memory for an object in Java?",
        a: "alloc",
        b: "malloc",
        c: "new",
        d: "create",
        correct: "c"
    },
    {
      question: "Which of these is an example of polymorphism?",
        a: "A class having multiple constructors",
        b: "A subclass implementing a superclass method differently",
        c: "A class having only private members",
        d: "None of the above",
        correct: "b"
    },
    {
        question: "What is the default access modifier in Java?",
        a: "private",
        b: "protected",
        c: "default (package-private)",
        d: "public",
        correct: "c"
    },
    {
      question: "Which OOP principle is used to hide implementation details?",
        a: "Encapsulation",
        b: "Abstraction",
        c: "Polymorphism",
        d: "Inheritance",
        correct: "b"
    },
    {
        question: "How do you declare an interface in Java?",
        a: "class MyInterface {}",
        b: "interface MyInterface {}",
        c: "abstract class MyInterface {}",
        d: "None of the above",
        correct: "b"
    },
    {
        question: "Which statement about constructors in Java is true?",
        a: "A constructor must have the same name as the class",
        b: "A constructor must have a return type",
        c: "A constructor can be called like a regular method",
        d: "A constructor cannot be overloaded",
        correct: "a"
    }
];

const quiz = document.getElementById('quiz')

const answerEl = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')

const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')


const submitBtn = document.getElementById('submit')

let currentQuiz = 0

let score = 0

loadQuiz()

function loadQuiz(){

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]
    
    questionEl.innerText =currentQuizData.question
    
    a_text.innerText =currentQuizData.a
    
    b_text.innerText =currentQuizData.b
    
    c_text.innerText =currentQuizData.c
    
    d_text.innerText =currentQuizData.d
}

function deselectAnswers(){
    answerEl.forEach(answer => answer.checked = false)
}

function getSelected(){
    let answer 
    answerEl.forEach(answered =>{
        if(answered.checked){
            answer= answered.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML =`
            <h2>You answeres correctly at ${score}/${quizData.length} questions correctly</h2>
            <button onclick ="location.reload()">Reload</button>
            `
        }
    }

})