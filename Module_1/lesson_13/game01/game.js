'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };

    const FIGURES = language === 'EN' || language === 'ENG' ? FIGURES_ENG : FIGURES_RUS;

    return function start() {
      let randomInt;
      let inputComputer;
      let inputPlayer;
      let inputString;

      const isValidInputPlayer = (val) => {
        val = val.toLowerCase();
        inputPlayer = FIGURES.find((str) => str.startsWith(val));
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
        inputString = prompt(`${FIGURES[0]}, ${FIGURES[1]}, ${FIGURES[2]}?`);

        isCancel(inputString);

        if (!isValidInputPlayer(inputString)) {
          getInputPlayerRus();
        };
      };

      const runGame = () => {
        randomInt = getRandomIntInclusive(0, 2);
        inputComputer = FIGURES[randomInt];

        getInputPlayerRus();

        if (inputPlayer === inputComputer) {
          alert(`Компьютер: ${inputComputer}\nВы: ${inputPlayer}\nНичья!`);
          runGame();
        };

        if (
          (inputPlayer === FIGURES[0] && inputComputer === FIGURES[1]) ||
          (inputPlayer === FIGURES[1] && inputComputer === FIGURES[2]) ||
          (inputPlayer === FIGURES[2] && inputComputer === FIGURES[0]) 
        ) {
          alert(`Компьютер: ${inputComputer}\nВы: ${inputPlayer}\nВы выйграли!`);
          result.player += 1;
          runGame();
        } else {
          alert(`Компьютер: ${inputComputer}\nВы: ${inputPlayer}\nВыйграл компьютер!`);
          result.computer += 1;
          runGame();
        };
      }

      runGame();
    };
  };
  window.gameRPS = game;
})();