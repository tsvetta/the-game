(function(){
  const LETTERS_SPEED = 200;

  function initGame() {
    const $game = document.querySelector('#game');
    const $gameText = document.querySelector('#game-text');
    const $gameForm = document.querySelector('#game-form');

    $gameForm.addEventListener('submit', handleGameFormSubmit);
    
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

  function handleGameFormSubmit(e) {
    e.preventDefault();

    console.log('submit', e);
  }

  function letUserTalk() {
    const $userText = document.querySelector('#user-text');
    const $userLabel = document.querySelector('#user-label');

    $userText.disabled = false;
    $userLabel.classList.remove('disabled');
    $userText.focus();
  }

  setTimeout(initGame, 2000);
})();
