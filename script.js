// Questions with their options and point values
const questions = [
    {
        question: "1. ท่านรู้สึกพึงพอใจในชีวิต",
        choices: [
            { text: "ไม่เลย", value: 1 },
            { text: "เล็กน้อย", value: 2 },
            { text: "มาก", value: 3 },
            { text: "มากที่สุด", value: 4 }
        ]
    },
    {
        question: "2. ท่านรู้สึกสบายใจ",
        choices: [
            { text: "ไม่เลย", value: 1 },
            { text: "เล็กน้อย", value: 2 },
            { text: "มาก", value: 3 },
            { text: "มากที่สุด", value: 4 }
        ]
    },
    {
        question: "3. ท่านรู้สึกเบื่อหน่ายท้อแท้กับการดำเนินชีวิตประจำวัน",
        choices: [
            { text: "ไม่เลย", value: 1 },
            { text: "เล็กน้อย", value: 2 },
            { text: "มาก", value: 3 },
            { text: "มากที่สุด", value: 4 }
        ]
    },
    {
        question: "4. ท่านรู้สึกผิดหวังในตัวเอง	",
        choices: [
            { text: "ไม่เลย", value: 1 },
            { text: "เล็กน้อย", value: 2 },
            { text: "มาก", value: 3 },
            { text: "มากที่สุด", value: 4 }
        ]
    },
    {
        question: "5. ท่านรู้สึกว่าชีวิตของท่านมีแต่ความทุกข์",
        choices: [
            { text: "ไม่เลย", value: 1 },
            { text: "เล็กน้อย", value: 2 },
            { text: "มาก", value: 3 },
            { text: "มากที่สุด", value: 4 }
        ]
    },
    {
        question: "6. ท่านสามารถทำใจยอมรับได้สำหรับปัญหาที่ยากจะแก้ไข (เมื่อมีปัญหา)",
        choices: [
            { text: "ไม่เลย", value: 1 },
            { text: "เล็กน้อย", value: 2 },
            { text: "มาก", value: 3 },
            { text: "มากที่สุด", value: 4 }
        ]
    },
    {
        question: "7. ท่านมั่นใจว่าสามารถควบคุมอารมณ์ได้เมื่อมีเหตุการณ์คับขันหรือร้ายแรงเกิดขึ้น",
        choices: [
            { text: "ไม่เลย", value: 1 },
            { text: "เล็กน้อย", value: 2 },
            { text: "มาก", value: 3 },
            { text: "มากที่สุด", value: 4 }
        ]
    },
    {
        question: "8. ท่านมั่นใจที่จะเผชิญกับเหตุการณ์ร้ายแรงที่เกิดขึ้นในชีวิต",
        choices: [
            { text: "ไม่เลย", value: 1 },
            { text: "เล็กน้อย", value: 2 },
            { text: "มาก", value: 3 },
            { text: "มากที่สุด", value: 4 }
        ]
    },
    {
        question: "9. ท่านรู้สึกเห็นใจเมื่อผู้อื่นมีทุกข์",
        choices: [
            { text: "ไม่เลย", value: 1 },
            { text: "เล็กน้อย", value: 2 },
            { text: "มาก", value: 3 },
            { text: "มากที่สุด", value: 4 }
        ]
    },
    {
        question: "10. ท่านรู้สึกเป็นสุขในการช่วยเหลือผู้อื่นที่มีปัญหา",
        choices: [
            { text: "ไม่เลย", value: 1 },
            { text: "เล็กน้อย", value: 2 },
            { text: "มาก", value: 3 },
            { text: "มากที่สุด", value: 4 }
        ]
    },
    {
        question: "11. ท่านให้ความช่วยเหลือแก่ผู้อื่นเมื่อมีโอกาส",
        choices: [
            { text: "ไม่เลย", value: 1 },
            { text: "เล็กน้อย", value: 2 },
            { text: "มาก", value: 3 },
            { text: "มากที่สุด", value: 4 }
        ]
    },
    {
        question: "12. ท่านรู้สึกภูมิใจในตนเอง",
        choices: [
            { text: "ไม่เลย", value: 1 },
            { text: "เล็กน้อย", value: 2 },
            { text: "มาก", value: 3 },
            { text: "มากที่สุด", value: 4 }
        ]
    },
    {
        question: "13. ท่านรู้สึกมั่นคง ปลอดภัยเมื่ออยู่ในครอบครัว",
        choices: [
            { text: "ไม่เลย", value: 1 },
            { text: "เล็กน้อย", value: 2 },
            { text: "มาก", value: 3 },
            { text: "มากที่สุด", value: 4 }
        ]
    },
    {
        question: "14. หากท่านป่วยหนัก ท่านเชื่อว่าครอบครัวจะดูแลท่านเป็นอย่างดี",
        choices: [
            { text: "ไม่เลย", value: 1 },
            { text: "เล็กน้อย", value: 2 },
            { text: "มาก", value: 3 },
            { text: "มากที่สุด", value: 4 }
        ]
    },
    {
        question: "15. สมาชิกในครอบครัวมีความรักและผูกพันต่อกัน",
        choices: [
            { text: "ไม่เลย", value: 1 },
            { text: "เล็กน้อย", value: 2 },
            { text: "มาก", value: 3 },
            { text: "มากที่สุด", value: 4 }
        ]
    },
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let userAnswers = [];
let userInfoPoints = 0;

// Collect user information points
function collectUserInfoPoints() {
    const gender = parseInt(document.getElementById("gender").value) || 0;
    const age = parseInt(document.getElementById("age").value) || 0;
    const education = parseInt(document.getElementById("education").value) || 0;
    const occupation = parseInt(document.getElementById("occupation").value) || 0;
    const marital = parseInt(document.getElementById("marital").value) || 0;

    // Assign points from user information
    userInfoPoints = gender + age + education + occupation + marital;
}

// Validate user input form before starting the quiz
function validateForm() {
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;
    const education = document.getElementById("education").value;
    const occupation = document.getElementById("occupation").value;
    const marital = document.getElementById("marital").value;

    if (!gender || !age || !education || !occupation || !marital) {
        Swal.fire({
            icon: 'error',
            title: 'ข้อมูลไม่ครบถ้วน',
            text: 'กรุณากรอกข้อมูลให้ครบทุกช่อง!'
        });
        return false;
    }

    return true;
}

// Start the quiz
function startQuiz() {
    if (!validateForm()) return; // Validate form before starting the quiz

    collectUserInfoPoints();

    const userInfoForm = document.getElementById('user-info');
    userInfoForm.classList.add('hidden'); // Hide user info form

    const quizSection = document.getElementById('quiz-section');
    quizSection.classList.remove('hidden'); // Show quiz section

    showQuestion();
}

// Show the current question
function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    const questionData = questions[currentQuestionIndex];

    questionContainer.innerHTML = `
        <div class="text-lg font-semibold">${questionData.question}</div>
        ${questionData.choices.map((choice, index) => `
            <div>
                <input type="radio" name="answer" id="choice${index}" value="${choice.value}" class="mr-2" onchange="enableNextButton()">
                <label for="choice${index}">${choice.text}</label>
            </div>
        `).join('')}
    `;

    document.getElementById('next-btn').disabled = true; // Disable next button initially
}

// Enable the "Next Question" button when an answer is selected
function enableNextButton() {
    document.getElementById('next-btn').disabled = false;
}

// Proceed to the next question
function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        userAnswers.push(parseInt(selectedOption.value));
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'โปรดเลือกคำตอบ!',
            text: 'คุณต้องเลือกคำตอบก่อนที่จะไปยังคำถามถัดไป!'
        });
    }
}

// Show the results
function showResults() {
    const quizSection = document.getElementById('quiz-section');
    Swal.fire({
        title: 'ผลลัพธ์',
        html: `<p>คะแนนของคุณ: ${calculateScore()} / ${(questions.length * 4) + userInfoPoints}</p>`,
        icon: 'success',
        confirmButtonText: 'เสร็จสิ้น'
    }).then(() => {
        quizSection.innerHTML = `
            <h2 class="text-2xl font-bold mb-4 text-center">ผลลัพธ์</h2>
            <p class="text-center">คะแนนของคุณ: ${calculateScore()} / ${(questions.length * 4) + userInfoPoints}</p>
        `;
    });
}

// Calculate the total score
function calculateScore() {
    // Calculate the quiz score based on answers
    const quizScore = userAnswers.reduce((score, answer) => score + answer, 0);
    // Total score including user information points
    return quizScore + userInfoPoints;
}

// Show the results
function showResults() {
    const quizSection = document.getElementById('quiz-section');
    const totalScore = calculateScore(); // Calculate the total score
    let resultMessage = '';

    // Determine the result message based on the score range
    if (totalScore <= 43) {
        resultMessage = 'มีสุขภาพจิตต่ำกว่าคนทั่วไป (Poor)';
    } else if (totalScore >= 44 && totalScore <= 50) {
        resultMessage = 'มีสุขภาพจิตเท่ากับคนทั่วไป (Fair)';
    } else {
        resultMessage = 'มีสุขภาพจิตดีกว่าคนทั่วไป (Good)';
    }

    // Display the result using SweetAlert2
    Swal.fire({
        title: 'ผลลัพธ์',
        html: `<p>คะแนนของคุณ: ${totalScore}</p><p>${resultMessage}</p>`,
        icon: 'success',
        confirmButtonText: 'เสร็จสิ้น'
    }).then(() => {
        quizSection.innerHTML = `
            <h2 class="text-2xl font-bold mb-4 text-center">ผลลัพธ์</h2>
            <p class="text-center">คะแนนของคุณ: ${totalScore}</p>
            <p class="text-center">${resultMessage}</p>
        `;
    });
}
