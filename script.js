{\rtf1\ansi\ansicpg1252\cocoartf2512
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // 15 questions and answers (one for each grid slot)\
const questions = [\
    \{ question: "Where do humans originate?", answers: ["East Africa", "Asia", "Europe", "North America"], correctAnswer: "East Africa" \},\
    \{ question: "What is a hominid?", answers: ["A human-like creature", "A type of animal", "A plant", "A mineral"], correctAnswer: "A human-like creature" \},\
    \{ question: "Where is the Equator located?", answers: ["0 degrees latitude", "0 degrees longitude", "90 degrees latitude", "90 degrees longitude"], correctAnswer: "0 degrees latitude" \},\
    \{ question: "What is the Neolithic Revolution?", answers: ["The invention of farming", "The discovery of fire", "The development of language", "The invention of the wheel"], correctAnswer: "the invention of farming" \},\
    \{ question: "What is a cereal grain?", answers: ["The edible seed of a grass", "A type of fruit", "A root vegetable", "A fish"], correctAnswer: "the edible seed of a grass" \},\
    \{ question: "What is a nomad?", answers: ["A person who moves around", "A person who stays in one place", "A type of animal", "A person who studies fossils"], correctAnswer: "a person who moves around" \},\
    \{ question: "What is an artifact?", answers: ["A man-made object that reveals culture", "A naturally occurring object", "A type of animal", "A plant"], correctAnswer: "a man-made object that reveals culture" \},\
    \{ question: "What does Paleolithic mean?", answers: ["The Old Stone Age", "The New Stone Age", "The Bronze Age", "The Iron Age"], correctAnswer: "the Old Stone Age" \},\
    \{ question: "Which continent is the largest?", answers: ["Asia", "Africa", "North America", "Europe"], correctAnswer: "Asia" \},\
    \{ question: "Where is the South Pole?", answers: ["90 degrees south", "0 degrees latitude", "90 degrees north", "60 degrees south"], correctAnswer: "90 degrees south" \},\
    \{ question: "What does bipedalism mean?", answers: ["Walking on two feet", "Walking on four feet", "Flying", "Swimming"], correctAnswer: "walking on two feet" \},\
    \{ question: "Which kind of scientist studies fossils?", answers: ["A paleontologist", "A biologist", "A geologist", "A chemist"], correctAnswer: "a paleontologist" \},\
    \{ question: "Were animals or plants domesticated first?", answers: ["Animals", "Plants", "Both at the same time", "Neither"], correctAnswer: "animals" \},\
    \{ question: "Shifting cultivation is also known as what?", answers: ["Slash-and-burn farming", "Intensive farming", "Organic farming", "Industrial farming"], correctAnswer: "slash-and-burn farming" \},\
    \{ question: "What geographic feature favored the development of agriculture?", answers: ["Rivers", "Mountains", "Deserts", "Forests"], correctAnswer: "rivers" \}\
];\
\
// Rebus Puzzle: 15 parts to reveal (e.g., letters, images, etc.)\
let rebusTiles = Array(15).fill(false);  // All tiles are hidden initially\
let currentQuestionIndex = 0; // Track the current question\
\
function startGame() \{\
    generateQuestionGrid();\
    createRebusTiles();\
\}\
\
function generateQuestionGrid() \{\
    const gridContainer = document.getElementById('questions-grid');\
    gridContainer.innerHTML = ''; // Clear any existing grid\
\
    questions.forEach((q, index) => \{\
        const button = document.createElement('button');\
        button.className = 'question-button';\
        button.textContent = q.question;\
        button.onclick = () => checkAnswer(index);\
        gridContainer.appendChild(button);\
    \});\
\}\
\
function checkAnswer(index) \{\
    const question = questions[index];\
    const correctAnswer = question.correctAnswer;\
    const answer = prompt(`What is the correct answer to: "$\{question.question\}"?`);\
\
    if (answer.trim().toLowerCase() === correctAnswer.toLowerCase()) \{\
        revealTile(index);\
    \} else \{\
        alert("Incorrect answer. Try again!");\
    \}\
\}\
\
function revealTile(index) \{\
    if (rebusTiles[index] === false) \{\
        rebusTiles[index] = true; // Mark this tile as revealed\
        document.getElementById(`tile-$\{index\}`).style.backgroundColor = 'white'; // Reveal the tile\
\
        // Check if all tiles are revealed\
        if (rebusTiles.every(tile => tile === true)) \{\
            document.getElementById("rebus-puzzle").style.display = "block";  // Show the Rebus input area\
        \}\
    \}\
\}\
\
function createRebusTiles() \{\
    const rebusContainer = document.getElementById('rebus-tiles-container');\
    rebusContainer.innerHTML = ''; // Clear existing tiles\
\
    rebusTiles.forEach((tile, index) => \{\
        const tileDiv = document.createElement('div');\
        tileDiv.className = 'tile';\
        tileDiv.id = `tile-$\{index\}`;\
        rebusContainer.appendChild(tileDiv);\
    \});\
\}\
\
document.getElementById("rebus-submit").onclick = function() \{\
    const rebusAnswer = document.getElementById("rebus-input").value.trim();\
    if (rebusAnswer.toLowerCase() === "agriculture") \{ // Example Rebus answer\
        alert("Congratulations, you solved the Rebus puzzle!");\
        resetGame();\
    \} else \{\
        alert("Incorrect. Try again!");\
    \}\
\}\
\
function resetGame() \{\
    rebusTiles = Array(15).fill(false); // Reset all tiles\
    createRebusTiles(); // Recreate tiles\
    startGame(); // Start the game again with the grid\
\}\
\
// Initialize the game\
startGame();\
}