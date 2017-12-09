
const LETTERS_SPEED = 200;
let isRulesOpenedFirstTime = true;

function initGame() {
  const $game = document.querySelector('#game');
  const $gameText = document.querySelector('#game-text');
  const $gameForm = document.querySelector('#game-form');
  const $helpButton = document.querySelector('#help-button');

  $gameForm.addEventListener('submit', handleGameFormSubmit);
  $helpButton.addEventListener('click', handleHelpButtonClick);
  
  printLetterByLetter('wake up, Neo', $gameText)
    .then(letUserTalk);

  level_1();
}

function intro() {
  console.log('intro');
}

function level_1() {
  console.log('level_1');
}


function printLetterByLetter(text, $targetNode) {
  const letters = text.split('');

  const lettersPromises = letters.map((letter, index) => {
    return wait(LETTERS_SPEED * index)
      .then(() => {
        $targetNode.append(letter);
      })
  });

  return Promise.all(lettersPromises);
}

function wait(timeout) {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

function handleHelpButtonClick() {
  const $rulesBox = document.querySelector('#rules-box');
  const $rules = document.querySelector('#rules');

  if ($rulesBox.classList.contains('opened')) {
    $rulesBox.classList.remove('opened');
  } else {
    $rulesBox.classList.add('opened');
  }

  if (isRulesOpenedFirstTime) {
    isRulesOpenedFirstTime = false;

    // $rules.
  }
}

function handleGameFormSubmit(e) {
  e.preventDefault();

  console.log('submit', e);
}

function letUserTalk() {
  const $playerText = document.querySelector('#player-text');
  const $playerLabel = document.querySelector('#player-label');

  $playerText.disabled = false;
  $playerLabel.classList.remove('disabled');
  $playerText.focus();
}

setTimeout(initGame, 2000);
