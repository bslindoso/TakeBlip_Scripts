// NORMALIZE SCORE

// <<<<Var of input>>>>
// input.content

// <<<<var de saida>>>>
// score

// <<<condição>>>

// <<<Script>>>>
// se a variavel for Igual a
// processedInput@input
// valor true

const run = (score) => {
  if (score == '') {
    return null;
  }

  score = replaceSpecialLetters(score);

  if (score == ' ') {
    return null;
  }

  const numberName = [
    {
      "name": 'zero',
      "value": 0
    },
    {
      "name": 'um',
      "value": 1
    },
    {
      "name": 'dois',
      "value": 2
    },
    {
      "name": 'tres',
      "value": 3
    },
    {
      "name": 'quatro',
      "value": 4
    },
    {
      "name": 'cinco',
      "value": 5
    },
    {
      "name": 'seis',
      "value": 6
    },
    {
      "name": 'sete',
      "value": 7
    },
    {
      "name": 'oito',
      "value": 8
    },
    {
      "name": 'nove',
      "value": 9
    },
    {
      "name": 'dez',
      "value": 10
    },
  ];

  const isScore = numberName.find(element => element.name === score);

  if (isScore !== undefined) {
    return isScore.value;
  }

  let number = score.replace(/[^0-9]/g, '');

  if (number == '') {
    return null;
  }

  if (isNumeric(number)) {
    number = parseInt(number);
    if (number < 0) return 0;
    if (number > 10) return 10;

    return number;
  }
  return null;
};

function isNumeric(num) {
  return !isNaN(num);
}

function replaceSpecialLetters(input) {
  return input.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

const nota = 'va z io ';

console.log(run(nota));