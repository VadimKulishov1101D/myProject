import readlineSync from 'readline-sync';

const choices = ['камень', 'ножницы', 'бумага'];

function getRandomChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
// Это коммент ❤️💕
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'Ничья!';
  } else if (
    (userChoice === 'камень' && computerChoice === 'ножницы') ||
    (userChoice === 'ножницы' && computerChoice === 'бумага') ||
    (userChoice === 'бумага' && computerChoice === 'камень')
  ) {
    return 'Вы победили!';
  } else {
    return 'Компьютер победил!';
  }
}

function playGame() {
  console.log('Добро пожаловать в игру "Камень, Ножницы, Бумага"!\n');

  let userChoice = readlineSync.question(
    'Выберите ваш вариант (камень, ножницы, бумага): '
  ).toLowerCase();

  while (!choices.includes(userChoice)) {
    console.log('Неверный ввод. Пожалуйста, выберите камень, ножницы или бумагу.');
    userChoice = readlineSync.question('Выберите ваш вариант: ').toLowerCase();
  }

  const computerChoice = getRandomChoice();

  console.log(`Компьютер выбрал: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();