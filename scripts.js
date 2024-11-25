const questions = [
    { question: "Have the ability to fly or be invisible?", optionA: "Fly", optionB: "Invisible" },
    { question: "Live in the city or the countryside?", optionA: "City", optionB: "Countryside" },
    { question: "Have a pause button or rewind button for the rest of your life?", optionA: "Pause", optionB: "Rewind"},
    { question: "Transform into an animal or plant at will?", optionA:"Animal", optionB:"Plant" },
    { question: "Have fortune or fame?", optionA: "Fortune", optionB:"Fame" },
    { question: "Spend the day with your favorite athlete or movie star?", optionA: "Athlete", optionB:"Movie star" },
    { question: "Be too hot or too cold?", optionA: "Hot", optionB: "Cold" },
    { question: "Travel to the past or the future?", optionA: "Past", optionB: "Future" },
    { question: "Have nosy neighbors or noisy neighbors?", optionA: "Nosy", optionB: "Noisy" },
    { question: "Be stuck in the past or stuck in the future?", optionA: "Past", optionB: "Future" },
    { question: "Watch a big game at home or in the stadium?", optionA: "Home", optionB: "Stadium" },
    { question: "Be stuck in a foreign country for 24 hours or rest of your life?", optionA: "24 hours", optionB: "Life" },
    { question: "Have a flight that's delayed 10 hours or lose your luggage?", optionA: "10 hours", optionB: "Luggage" },
    { question: "Be star player on a losing basketball team or ride bench on winning one?", optionA: "Star player", optionB: "Ride bench" },
    { question: "Own a yacht or your own Air Force 1?", optionA: "Yacht", optionB: "Air Force 1" },
    { question: "Fluent in all languages or understand animals?", optionA: "Languages", optionB: "Animals" },
    { question: "See 10 minutes into the future or 150 years?", optionA: "10 minutes", optionB: "150 years" },
    { question: "Eat donuts or popcorn all day?", optionA: "Donuts", optionB: "Popcorn" },
    { question: "Lose the ability to read or speak?", optionA: "Read", optionB: "Speak" },
    { question: "Fly at 100 mph or run at 100 mph?" , optionA: "Fly", optionB: "Run" },
    { question: "Breathe underwater or walk through walls?" , optionA: "Underwater", optionB: "Walls" },
    { question: "Eat pizza every day for the rest of your life or never eat pizza for the next 5 years?", optionA: "Every day", optionB: "5 years" },
    { question:  "Only be able to drink for a year or eat food for a year?", optionA: "Drink", optionB: "Food" },
    { question: "Wear cowboy boots for a year or ride a horse for a year?", optionA: "Boots", optionB: "Horse" },
    { question: "Travel anywhere on stilts or roller skates?", optionA: "Stilts", optionB: "Roller Skates" }, 
    { question: "Eat pizza or ice cream for the rest of your life?", optionA: "Pizza", optionB: "Ice cream" }, 
    { question: "Drink Pepsi or Coke for the rest of your life?", optionA: "Pepsi", optionB: "Coke" },
    { question: "Never have your birthday or any holiday celebrated?", optionA: "Birthday", optionB: "Holiday" },
    { question: "Always be sweaty or hungry?", optionA: "Sweaty", optionB: "Hungry" },
    { question: "Always be cold or hot?", optionA: "Cold", optionB: "Hot" },
    { question: "Have free groceries or free gas for the rest of your life?", optionA: "Groceries", optionB: "Gas" },
    { question: "Live in a world without books or music?", optionA: "Books", optionB:" Music" },
    { question: "Fight 500 ostriches or 1 T-rex?", optionA: "Ostriches", optionB: "T-rex" },
    { question: "Be an infamous criminal or infamous actor?", optionA: "Criminal", optionB: "Actor" },

    // Add more questions here
];

let currentQuestionIndex = 0;
let results = { A: 0, B: 0 };

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').innerText = currentQuestion.question;
    document.getElementById('optionA').innerText = currentQuestion.optionA;
    document.getElementById('optionB').innerText = currentQuestion.optionB;
}

function selectOption(option) {
    results[option]++;
    showResults();
}

function showResults() {
    const totalVotes = results.A + results.B;
    const percentageA = ((results.A / totalVotes) * 100).toFixed(2);
    const percentageB = ((results.B / totalVotes) * 100).toFixed(2);

    document.getElementById('results').innerText = `Option A: ${percentageA}%\nOption B: ${percentageB}%`;
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('results-container').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    document.getElementById('question-container').style.display = 'block';
    document.getElementById('results-container').style.display = 'none';
    loadQuestion();
}

window.onload = loadQuestion;
