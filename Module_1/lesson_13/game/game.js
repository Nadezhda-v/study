'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };

    return function start() {
      let randomInt;
      let inputComputer;
      let firstLetterInputComputer;
      let firstLetterInputPlayer;
      let inputPlayer;
      let inputString;

      const isValidInputPlayer = (val) => {
        val = val.toLowerCase();
        inputPlayer = FIGURES_RUS.find((str) => str.startsWith(val));
        return inputPlayer !== undefined;
      };

      const isCancel = (str) => {
        if (str === null) {
          let exit = confirm('Точно хотите выйти?');
          if(exit === true){
            return alert(`Результат:\nКомпьютер: ${result.computer}\nВы: ${result.player}`);
          }else{
            getInputPlayerRus();
          }
        }
      }

      const getInputPlayerRus = () => {
        inputString = prompt(`${FIGURES_RUS[0]}, ${FIGURES_RUS[1]}, ${FIGURES_RUS[2]}?`);

        isCancel(inputString);

        if (!isValidInputPlayer(inputString)) {
          getInputPlayerRus();
        };

        firstLetterInputPlayer = inputString[0];
      };

      const runGame = () => {
        randomInt = getRandomIntInclusive(0, 2);
        inputComputer = FIGURES_RUS[randomInt];
        firstLetterInputComputer = FIGURES_RUS[randomInt][0];
        getInputPlayerRus();

        if (firstLetterInputPlayer === firstLetterInputComputer) {
          alert(`Компьютер: ${inputComputer}\nВы: ${inputPlayer}\nНичья!`);
          runGame();
        };

        if (
          (firstLetterInputPlayer === 'к' && firstLetterInputComputer === 'н') ||
          (firstLetterInputPlayer === 'н' && firstLetterInputComputer === 'б') ||
          (firstLetterInputPlayer === 'б' && firstLetterInputComputer === 'к')
        ) {
          alert(`Компьютер: ${inputComputer}\nВы: ${inputPlayer}\nВы выйграли!`);
          result.player += 1;
          console.log(result.player);
          runGame();
        } else {
          alert(`Компьютер: ${inputComputer}\nВы: ${inputPlayer}\nВыйграл компьютер!`);
          result.computer += 1;
          console.log(result.computer);
          runGame();
        };
      }

      runGame();
    };
  };
  window.gameRPS = game;
})();