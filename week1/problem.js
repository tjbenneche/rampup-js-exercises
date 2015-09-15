var dataTypes = [
  {
    question: "Hello world",
    answer: "Data Type Here"
  },
  {
    question: 12,
    answer: "Data Type Here"
  },
  {
    question: 12 + 5,
    answer: "Data Type Here"
  },
  {
    question: 12 + "5",
    answer: "Data Type Here"
  },
  {
    question: "hello" + " world",
    answer: "Data Type Here"
  },
  {
    question: false,
    answer: "Data Type Here"
  },
  {
    question: !true,
    answer: "Data Type Here"
  },
  {
    question: {name: "Tom"},
    answer: "Data Type Here"
  },
  {
    question: [4, 8, 15, 16, 23, 42],
    answer: "Data Type Here"
  },
  {
    question: ['hi', 12, [0,2], {greeting: "HI! I am a nested object"}],
    answer: "Data Type Here"
  }
]

for (var i = 0; i < dataTypes.length; i++){
  _aId = 'a' + (i+1);
  _qId = 'q' + (i+1);
  _question = dataTypes[i].question;
  _answer = dataTypes[i].answer;

  $question = document.getElementById(_qId);
  $answer = document.getElementById(_aId);

  $answer.innerHTML = _answer;

  if (typeof(_question) === _answer) {
    $question.className += ' correct';
  }
  else if (Array.isArray(_question) && _answer === "array") {
    $question.className += ' correct';
  }
  else {
    $question.className += ' incorrect';
  }

}

var booleans = [
  {
    question: true,
    answer: "Truthy or Falsey?"
  },
  {
    question: false,
    answer: "Truthy or Falsey?"
  },
  {
    question: !false,
    answer: "Truthy or Falsey?"
  },
  {
    question: !!true,
    answer: "Truthy or Falsey?"
  },
  {
    question: {},
    answer: "Truthy or Falsey?"
  },
  {
    question: true || 420 && 28 == '28',
    answer: "Truthy or Falsey?"
  },
  {
    question: true && !false && 0,
    answer: "Truthy or Falsey?"
  },
  {
    question: null || '28' === 28,
    answer: "Truthy or Falsey?"
  },
  {
    question: undefined && 1,
    answer: "Truthy or Falsey?"
  },
  {
    question: "hi i am a string",
    answer: "Truthy or Falsey?"
  },
  {
    question: "" || NaN,
    answer: "Truthy or Falsey?"
  },
]


for (var i = 0; i < booleans.length; i++){
  _aId = 'a' + (i+11);
  _qId = 'q' + (i+11);
  _question = booleans[i].question;
  _answer = booleans[i].answer;

  $question = document.getElementById(_qId);
  $answer = document.getElementById(_aId);

  $answer.innerHTML = _answer;

  if (_question && _answer === "truthy") {
    $question.className += ' correct';
  }
  else if (!_question && _answer === "falsey"){
    $question.className += ' correct';
  }
  else {
    $question.className += ' incorrect';
  }

}
