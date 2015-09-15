var dataTypes = [
  {
    question: "Hello world",
    answer: "string"
  },
  {
    question: 12,
    answer: "number"
  },
  {
    question: 12 + 5,
    answer: "number"
  },
  {
    question: 12 + "5",
    answer: "string"
  },
  {
    question: "hello" + " world",
    answer: "string"
  },
  {
    question: false,
    answer: "boolean"
  },
  {
    question: !true,
    answer: "boolean"
  },
  {
    question: {name: "Tom"},
    answer: "object"
  },
  {
    question: [4, 8, 15, 16, 23, 42],
    answer: "array"
  },
  {
    question: ['hi', 12, [0,2], {greeting: "HI! I am a nested object"}],
    answer: "array"
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
    answer: "truthy"
  },
  {
    question: false,
    answer: "falsey"
  },
  {
    question: !false,
    answer: "truthy"
  },
  {
    question: !!true,
    answer: "truthy"
  },
  {
    question: {},
    answer: "truthy"
  },
  {
    question: true || 420 && 28 == '28',
    answer: "truthy"
  },
  {
    question: true && !false && 0,
    answer: "falsey"
  },
  {
    question: null || '28' === 28,
    answer: "falsey"
  },
  {
    question: undefined && 1,
    answer: "falsey"
  },
  {
    question: "hi i am a string",
    answer: "truthy"
  },
  {
    question: "" || NaN,
    answer: "falsey"
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
