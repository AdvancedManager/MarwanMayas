// Simple multiple-choice quiz checker
function checkQuiz(questionName, correctIndex) {
  const selected = document.querySelector('input[name="' + questionName + '"]:checked');
  const resultBox = document.getElementById(questionName + "-result");

  if (!resultBox) return;

  if (!selected) {
    resultBox.textContent = " اختر إجابة أولاً.";
    resultBox.style.color = "#fbbf24";
    return;
  }

  if (parseInt(selected.value, 10) === parseInt(correctIndex, 10)) {
    resultBox.textContent = " إجابة صحيحة، شغل ممتاز";
    resultBox.style.color = "#4ade80";
  } else {
    resultBox.textContent = " إجابة غير صحيحة، جرّب مرة ثانية";
    resultBox.style.color = "#f97373";
  }
}