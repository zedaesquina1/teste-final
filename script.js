const correctAnswers = ['b', 'a', 'b', 'a', 'b']; // Respostas corretas para cada pergunta
    const questions = document.querySelectorAll('.question');
    const options = document.querySelectorAll('.options');

    function checkAnswers() {
      let score = 0;

      for (let i = 0; i < questions.length; i++) {
        const selectedOption = options[i].querySelector('input:checked');

        if (!selectedOption) {
          alert('Por favor, responda todas as perguntas.');
          return;
        }

        const userAnswer = selectedOption.value;

        if (userAnswer === correctAnswers[i]) {
          score++;
        }
      }

      const resultDiv = document.getElementById('result');
      resultDiv.innerText = `Você acertou ${score} de ${questions.length} perguntas.`;
    }