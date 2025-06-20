 const questions = {
        Mahabharata: {
          easy: [
            {
              question: "Who wrote Mahabharata?",
              options: ["Vyasa", "Valmiki", "Tulsidas", "Kalidasa"],
              answer: "Vyasa",
            },
            {
              question: "Who is Devavrath in Mahabharata?",
              options: ["Arjuna", "Krishna", "Bheeshma", "Draupadi"],
              answer: "Bheeshma",
            },
            {
              question: "Who is the daughter of Dhritarashtra?",
              options: ["Draupadi", "Kunti", "Dussala", "Subhadra"],
              answer: "Dussala",
            },
            {
              question: "What is the name of the war in Mahabharata?",
              options: [
                "Kurukshetra War",
                "Mahabharata War",
                "Ramayana War",
                "Vedic War",
              ],
              answer: "Kurukshetra War",
            },
            {
              question: "Who is the mother of Ghatothkacha?",
              options: ["Kunti", "Ganga", "Draupadi", "Hidimbi"],
              answer: "Hidimbi",
            },
          ],
          medium: [
            {
              question: "Who is Devavrath in his previous life?",
              options: [
                "Lord Indra",
                "Ashwiniputhr",
                "One of the Ashta Vasus",
                "Lord Vishnu",
              ],
              answer: "One of the Ashta Vasus",
            },

            {
              question: "Who is the brother of Draupadi?",
              options: ["Krishna", "Karna", "Vikarn", "Drishtadyumna"],
              answer: "Drishtadyumna",
            },
            {
              question: "Who is the son of Satyavati?",
              options: ["Vishwamitra", "Pandu", "Duryodhana", "Vedavyasa"],
              answer: "Vedavyasa",
            },
            {
              question: "Who is the mother of King Paandu?",
              options: ["Amba", "Ambika", "Draupadi", "Ambalika"],
              answer: "Ambalika",
            },
            {
              question: "Who is the mother of King Dhrutharastra?",
              options: ["Amba", "Ambika", "Draupadi", "Ambalika"],
              answer: "Ambika",
            },
          ],
          hard: [
            {
              question:
                "Who saw the Mahabharata war till last even after death?",
              options: ["Bhishma", "Vedavyasa", "Barbarik", "Ashwatthama"],
              answer: "Barbarik",
            },
            {
              question: "who was defeated by Pashupata Astra of arjuna?",
              options: ["duryodhana", "dussasana", "Jayadratha", "Ashwatthama"],
              answer: "Jayadratha",
            },
            {
              question: "Who is Krishna Dvaipayan?",
              options: ["Vyasa", "Valmiki", "Tulsidas", "Kalidasa"],
              answer: "Vyasa",
            },
            {
              question: "On which day of the war did Bhishma fall?",
              options: ["First day", "Eighth day", "Tenth day", "Eleventh day"],
              answer: "Tenth day",
            },
            {
              question:
                "Which emperor did Bhima defeat for Yudhishthira’s Rajasuya Yagna?",
              options: ["Balaram", "Jarasandh", "Duryodhana", "Dushasana"],
              answer: "Jarasandh",
            },
          ],
        },
      };

      let currentQuestionIndex = 0;
      let currentCategory = "";
      let currentDifficulty = "";
      let selectedQuestions = [];
      let totalQuestions = 0;
      let score = 0;
      let reviewQuestions = [];
let op = [];
      function startQuiz() {
        currentCategory = document.getElementById("category").value;
        currentDifficulty = document.getElementById("difficulty").value;
        selectedQuestions = [...questions[currentCategory][currentDifficulty]];
        reviewQuestions = [...selectedQuestions];
        totalQuestions = selectedQuestions.length;
        score = 0;

        document.getElementById("start-screen").classList.add("hidden");
        document.getElementById("quiz-screen").classList.remove("hidden");
        showQuestion();
      }

      function showQuestion() {
        const container = document.getElementById("question-container");
        container.innerHTML = "";
        currentQuestionIndex = Math.floor(
          Math.random() * selectedQuestions.length
        );
        

        console.log(totalQuestions);
        const q = selectedQuestions[currentQuestionIndex];
       

        selectedQuestions.splice(currentQuestionIndex, 1);
        const questionEl = document.createElement("div");
        questionEl.className = "question";
        questionEl.textContent = q.question;
        container.appendChild(questionEl);
op= [...q.options];
const randomIndex = Math.floor(Math.random() * op.length);
const randomOption = op[randomIndex];
        op.splice(randomIndex, 1);
        op.unshift(randomOption);

        op.forEach((option) => {
          const btn = document.createElement("button");
          btn.className = "option";
          btn.textContent = option;
        
          btn.onclick = () => {
            if (option === q.answer) {
              score++;
            }
            q.useranswer = option;
            nextQuestion();
          };
          container.appendChild(btn);
        });
      }
      function nextQuestion() {
        if (selectedQuestions.length > 0) {
          showQuestion();
        } else {
          showResult();
        }
      }

    
      function showResult() {
        document.getElementById("quiz-screen").classList.add("hidden");
        document.getElementById("result-screen").classList.remove("hidden");
        document.getElementById(
          "score"
        ).textContent = `${score} / ${totalQuestions}`;
      }
      function showreview() {
        const reviewContainer = document.getElementById("review-container");
        reviewContainer.innerHTML = "";
        reviewQuestions.forEach((q, index) => {
          const questionEl = document.createElement("div");
          questionEl.className = "question";
          questionEl.textContent = `${index + 1}. ${q.question}`;
          reviewContainer.appendChild(questionEl);
          q.options.forEach((option) => {
            const optionEl = document.createElement("div");
            optionEl.textContent = option;

            if (option === q.answer) {
              optionEl.style.color = "green";
              optionEl.textContent = "✅" + option;
            } else if (option === q.useranswer) {
              optionEl.style.color = "red";
              optionEl.textContent = "❌" + option;
            } else {
              optionEl.style.color = "black";
            }
            reviewContainer.appendChild(optionEl);
          });
        });
      }
