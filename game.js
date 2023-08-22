const questions = [
    {
        question: "Quel est l’autre nom de l’Homme-Mystère ?",
        reponses: [
            {text: "Le Sphinx", correct: true},
            {text: "Saphir", correct: false},
            {text: "Le Joker", correct: false},
        ]
    },
    {
        question: "Quelle est l’ancienne profession de Harley Quinn ?",
        reponses: [
            {text: "Infirmière", correct: false},
            {text: "Psychiatre", correct: true},
            {text: "Dentiste", correct: false},
        ] 
    },
    {
        question: "Quel est l’objet fétiche de Double Face ?",
        reponses: [
            {text: "Une pièce", correct: true},
            {text: "Un livre", correct: false},
            {text: "Un couteau", correct: false},
        ] 
    },
    {
        question: "Quelle ville Batman défend-il ?",
        reponses: [
            {text: "Gotham City", correct: true},
            {text: "Starling City", correct: false},
            {text: "Hell's Kitchen", correct: false},
        ] 
    },
    {
        question: "Tim Burtin a réalisé deux Batman, qui jouait Batman ?",
        reponses: [
            {text: "Georges Clooney", correct: false},
            {text: "Val Kilmer", correct: false},
            {text: "Mickael Keaton", correct: true},
        ] 
    },
    {
        question: "Dans son premier Batman (1989) Jack Nicholson jouait :",
        reponses: [
            {text: "Le Pingouin", correct: false},
            {text: "L’Homme Mystère", correct: false},
            {text: "Le Joker", correct: true},
        ] 
    },
    {
        question: "Quel est le prénom des parents du jeune Bruce Wayne ?",
        reponses: [
            {text: "Thomas et Martha", correct: true},
            {text: "Elaine et Georges", correct: false},
            {text: "Martha et James", correct: false},
        ] 
    },
    {
        question: "Qui interprète le Joker en 2008 ?",
        reponses: [
            {text: "Heath Legder", correct: false},
            {text: "Haeth Ledger", correct: false},
            {text: "Heath Ledger", correct: true},
        ] 
    },
    {
        question: "En quelle année Robin fait il sa première apparition ?",
        reponses: [
            {text: "1940", correct: true},
            {text: "1936", correct: false},
            {text: "1941", correct: false},
        ] 
    },
    {
        question: "Qui est la fille de Batman et Catwoman (Earth - 2) ?",
        reponses: [
            {text: "Oracle", correct: false},
            {text: "Huntress", correct: true},
            {text: "Black Canary", correct: false},
        ] 
    },
    {
        question: "Qui est Jonathan Crane ?",
        reponses: [
            {text: "L’Épouvantail", correct: true},
            {text: "Le Joker", correct: false},
            {text: "Hugo Strange", correct: false},
        ] 
    },
    {
        question: "Batman c’est aussi le nom d’une ville en...",
        reponses: [
            {text: "Turquie", correct: true},
            {text: "Islande", correct: false},
            {text: "Allemagne", correct: false},
        ] 
    },
    {
        question: "Qui a produit Batman en 1964 ?",
        reponses: [
            {text: "Stanley Kubrick", correct: false},
            {text: "Andy Warhol", correct: true},
            {text: "Peter Jackson", correct: false},
        ] 
    },
    {
        question: "Quel vilain apparaît pour la première fois dans le Batman 232 ?",
        reponses: [
            {text: "Le Pingouin", correct: false},
            {text: "Ra’s al Ghul", correct: true},
            {text: "Poison Ivy", correct: false},
        ] 
    },
    {
        question: "Qui est l’interprète de Catwoman dans le nouveau Batman de Matt Reeves (2022) ?",
        reponses: [
            {text: "Emma Watson", correct: false},
            {text: "Gigi Hadid", correct: false},
            {text: "Zoë Kravitz", correct: true},
        ] 
    }
];

const questionElement = document.getElementById("question");
const boutonReponses = document.getElementById("boutonReponses");
const boutonNext = document.getElementById("questionSuivante");

let currentQuestionIndex = 0;
let score= 0;

function startQuiz(){
    currentQuestionIndex= 0;
    score = 0;
    boutonNext.innerHTML = "Question suivante";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.reponses.forEach(reponse => {
        const bouton = document.createElement("button");
        bouton.innerHTML = reponse.text;
        bouton.classList.add("btnReponse");
        boutonReponses.appendChild(bouton);
        if(reponse.correct){
            bouton.dataset.correct = reponse.correct;
        }
        bouton.addEventListener("click", selectAnswer);
        
    });
}

function resetState(){
    boutonNext.style.display = "none";
    while (boutonReponses.firstChild){
        boutonReponses.removeChild(boutonReponses.firstChild);
    }

}

function selectAnswer(e){
    const boutonSelected = e.target;
    const isCorrect = boutonSelected.dataset.correct === "true";
    if(isCorrect){
        boutonSelected.classList.add("correct");
    }else{
        boutonSelected.classList.add("incorrect");
    }
}

startQuiz();