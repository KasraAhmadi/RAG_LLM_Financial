// DOM Elements
const screens = {
    home: document.getElementById('home-screen'),
    id: document.getElementById('id-screen'),
    category: document.getElementById('category-screen'),
    quiz: document.getElementById('quiz-screen'),
    results: document.getElementById('results-screen'),
    leaderboard: document.getElementById('leaderboard-screen')
};

// Quiz state
const quizState = {
    userId: '',
    currentCategory: '',
    currentQuestionIndex: 0,
    score: 0,
    userAnswers: [],
    totalQuestions: 0
};

// Event Listeners for navigation buttons
document.getElementById('start-quiz').addEventListener('click', () => showScreen('id'));
document.getElementById('view-leaderboard').addEventListener('click', () => {
    updateLeaderboard();
    showScreen('leaderboard');
});
document.getElementById('submit-id').addEventListener('click', validateAndProceed);
document.getElementById('see-leaderboard').addEventListener('click', () => {
    updateLeaderboard();
    showScreen('leaderboard');
});
document.getElementById('play-again').addEventListener('click', () => showScreen('home'));

// Add event listeners to all back buttons
document.querySelectorAll('.back-btn').forEach(button => {
    button.addEventListener('click', function() {
        location.reload();
        // const targetScreen = this.getAttribute('data-target');
        // showScreen(targetScreen);
    });
});

// Add event listeners to category cards
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        startQuiz(category);
    });
});

// Add event listeners to quiz options
document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', function() {
        selectOption(this.getAttribute('data-option'));
    });
});

// Function to show a specific screen and hide others
function showScreen(screenId) {
    Object.values(screens).forEach(screen => {
        screen.classList.add('hidden');
    });
    screens[screenId].classList.remove('hidden');
}

// Function to validate user ID and proceed
function validateAndProceed() {
    const userIdInput = document.getElementById('user-id');
    const userId = userIdInput.value.trim();
    
    if (userId === '') {
        alert('Please enter your unique ID');
        return;
    }
    
    quizState.userId = userId;
    showScreen('category');
}

// Function to start the quiz with the selected category
function startQuiz(category) {
    quizState.currentCategory = category;
    quizState.currentQuestionIndex = Math.floor(0, quizData[category].questions.length);
    quizState.score = 0;
    quizState.userAnswers = [];
    quizState.totalQuestions = 7;
    quizState.all_possible_questions = quizData[category].questions.length;
    
    // Update UI
    document.getElementById('quiz-category').textContent = formatCategoryName(category);
    document.getElementById('total-questions').textContent = quizState.totalQuestions;
    
    // Load first question
    loadQuestion();
    
    // Show quiz screen
    showScreen('quiz');
}

// Function to format category name (replace underscores with spaces)
function formatCategoryName(category) {
    return category.replace(/_/g, ' ');
}

// Function to load the current question
function loadQuestion() {
    const questionData = quizData[quizState.currentCategory].questions[quizState.currentQuestionIndex%quizState.all_possible_questions];
    
    // Update question text
    document.getElementById('question-text').textContent = questionData.question;
    
    // Update options
    document.getElementById('option-a').textContent = questionData.a;
    document.getElementById('option-b').textContent = questionData.b;
    document.getElementById('option-c').textContent = questionData.c;
    document.getElementById('option-d').textContent = questionData.d;
    
    // Update question progress
    document.getElementById('current-question').textContent = quizState.currentQuestionIndex + 1;
    
    // Reset options styling
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected', 'correct', 'incorrect');
    });
}

// Function to handle option selection
function selectOption(selectedOption) {
    // Prevent selecting after answer is submitted
    if (document.querySelector('.option.correct') || document.querySelector('.option.incorrect')) {
        return;
    }
    
    const questionData = quizData[quizState.currentCategory].questions[quizState.currentQuestionIndex];
    const correctOption = questionData.correct;
    
    // Style selected option
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
        
        const optionValue = option.getAttribute('data-option');
        if (optionValue === selectedOption) {
            option.classList.add('selected');
            
            // Check if answer is correct
            if (selectedOption === correctOption) {
                option.classList.add('correct');
                quizState.score++;
            } else {
                option.classList.add('incorrect');
                // Highlight correct answer
                document.querySelector(`.option[data-option="${correctOption}"]`).classList.add('correct');
            }
        }
    });
    
    // Store user's answer
    quizState.userAnswers.push({
        question: questionData.question,
        userAnswer: selectedOption,
        correctAnswer: correctOption,
        isCorrect: selectedOption === correctOption
    });
    
    // Move to next question after a delay
    setTimeout(() => {
        quizState.currentQuestionIndex++;
        
        if (quizState.currentQuestionIndex < quizState.totalQuestions) {
            loadQuestion();
        } else {
            finishQuiz();
        }
    }, 1500);
}

// Function to finish the quiz
function finishQuiz() {
    // Update results screen
    document.getElementById('final-score').textContent = quizState.score;
    document.getElementById('max-score').textContent = quizState.totalQuestions;
    
    sendScore(quizState.userId,quizState.currentCategory,quizState.score)
    // Add to leaderboard
    
    // Show results screen
    showScreen('results');
}

// Function to add entry to leaderboard
function addToLeaderboard(id, category, score, totalQuestions) {
    // Check if this ID already exists in the leaderboard
    const existingEntryIndex = leaderboard.findIndex(entry => entry.id === id && entry.category === category);
    
    if (existingEntryIndex !== -1) {
        // Update if new score is higher
        if (score > leaderboard[existingEntryIndex].score) {
            leaderboard[existingEntryIndex].score = score;
            leaderboard[existingEntryIndex].totalQuestions = totalQuestions;
            leaderboard[existingEntryIndex].timestamp = new Date().toISOString();
        }
    } else {
        // Add new entry
        leaderboard.push({
            id,
            category,
            score,
            totalQuestions,
            timestamp: new Date().toISOString()
        });
    }
    
    // Sort leaderboard by score (descending)
    leaderboard.sort((a, b) => b.score - a.score);
    
    // Save to localStorage for persistence
    saveLeaderboard();
}

// Function to save leaderboard to localStorage
function saveLeaderboard() {
    localStorage.setItem('financialTriviaLeaderboard', JSON.stringify(leaderboard));
}

// Function to load leaderboard from localStorage
function loadLeaderboard() {
    const storedLeaderboard = localStorage.getItem('financialTriviaLeaderboard');
    if (storedLeaderboard) {
        leaderboard = JSON.parse(storedLeaderboard);
    }
}

// Function to render leaderboard in UI
function renderLeaderboard() {
    
    const leaderboardBody = document.getElementById('leaderboard-body');
    leaderboardBody.innerHTML = '';
    
    if (leaderboard.length === 0) {
        const emptyRow = document.createElement('tr');
        emptyRow.innerHTML = '<td colspan="4" style="text-align: center;">No entries yet. Be the first to take the quiz!</td>';
        leaderboardBody.appendChild(emptyRow);
        return;
    }
    
    leaderboard.forEach((entry, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${entry.id}</td>
            <td>${formatCategoryName(entry.category)}</td>
            <td>${entry.score}/${entry.totalQuestions}</td>
        `;
        leaderboardBody.appendChild(row);
    });
}

// Initialize the application
function init() {
    // Load leaderboard from localStorage
    loadLeaderboard();
    
    // Start with home screen
    showScreen('home');
}

function sendScore(user_id, category, score) {
    // Build the URL with the provided parameters.
    const url = `http://127.0.0.1:5000/api/send_score/${user_id}/${category}/${score}`;

    // Use the Fetch API to send the GET request.
    fetch(url)
      .then(response => {
        // Check if the response was successful.
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json(); // Parse JSON response.
      })
      .then(data => {
        console.log("Response from server:", data);
        // You can add further logic here based on the response.
      })
      .catch(error => {
        console.error("Error during fetch:", error);
      });
  }


  document.getElementById("view-leaderboard").addEventListener("click", function() {
    // Example values are passed: user_id='1', category='math', score=95.
    updateLeaderboard();
  });
  

  function updateLeaderboard() {
    fetch('http://127.0.0.1:5000/api/get_leaderboard/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        // Data is expected to be an array of objects with user_id, category, and score.
        const tableBody = document.getElementById('leaderboard-body');
        
        // Clear any existing rows
        tableBody.innerHTML = '';
  
        // Iterate over the data and create table rows
        data.forEach((entry, index) => {
          const row = document.createElement('tr');
          
          // Rank cell (index + 1)
          const rankCell = document.createElement('td');
          rankCell.textContent = index + 1;
          row.appendChild(rankCell);
          
          // User ID cell
          const idCell = document.createElement('td');
          idCell.textContent = entry.user_id;
          row.appendChild(idCell);
          
          // Category cell
          const categoryCell = document.createElement('td');
          categoryCell.textContent = entry.category;
          row.appendChild(categoryCell);
          
          // Score cell
          const scoreCell = document.createElement('td');
          scoreCell.textContent = entry.score;
          row.appendChild(scoreCell);
          
          // Add the row to the table body
          tableBody.appendChild(row);
        });
      })
      .catch(error => {
        console.error('Error fetching leaderboard:', error);
      });
  }

// Start the application
init(); 