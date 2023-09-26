'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getFigure = (lang) => {
    const languages = {
      RUS: {
        computer: 'Компьютер',
        player: 'Вы',
        result: 'Результат',
        exit: 'Точно хотите выйти?',
        win: 'Вы выйграли!',
        drow: 'Ничья!',
        loss: 'Выйграл компьютер!',
      },
      ENG: {
        computer: 'Computer',
        player: 'You',
        result: 'Result',
        exit: 'Are you sure you want to get out?',
        win: 'You win!',
        drow: 'Drow!',
        loss: 'Computer win!',
      },
    };
    return languages[lang];
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };

    const FIGURES = language === 'EN' || language === 'ENG' ?
      FIGURES_ENG : FIGURES_RUS;

    if (language === '' || language === undefined) {
      language = 'RUS';
    }

    if (language === 'EN') {
      language = 'ENG';
    }

    return function start() {
      const languageText = getFigure(language);

      let randomInt;
      let inputComputer;
      let inputPlayer;
      let inputString;

      const getInputPlayer = () => {
        inputString = prompt(`${FIGURES[0]}, ${FIGURES[1]}, ${FIGURES[2]}?`);
      };

      const isValidInputPlayer = (val) => {
        val = val.toLowerCase();
        inputPlayer = FIGURES.find((str) => str.startsWith(val));
        return inputPlayer !== undefined;
      };

      const isCancel = (str) => {
        if (str === null) {
          const exit = confirm(`${languageText.exit}`);
          if (exit === true) {
            return alert(`
              ${languageText.result}:
              ${languageText.computer}: ${result.computer}
              ${languageText.player}: ${result.player}`);
          } else {
            getInputPlayer();
          }
        }
      };

      const runGame = () => {
        randomInt = getRandomIntInclusive(0, 2);
        inputComputer = FIGURES[randomInt];

        getInputPlayer();

        isCancel(inputString);

        if (!isValidInputPlayer(inputString)) {
          getInputPlayer();
        }

        if (inputPlayer === inputComputer) {
          alert(`
            ${languageText.computer}: ${inputComputer}
            ${languageText.player}: ${inputPlayer}
            ${languageText.drow}`);
          runGame();
        }

        if (
          (inputPlayer === FIGURES[0] && inputComputer === FIGURES[1]) ||
          (inputPlayer === FIGURES[1] && inputComputer === FIGURES[2]) ||
          (inputPlayer === FIGURES[2] && inputComputer === FIGURES[0]) 
        ) {
          alert(`
            ${languageText.computer}: ${inputComputer}
            ${languageText.player}: ${inputPlayer}
            ${languageText.win}`);
          result.player += 1;
          runGame();
        } else {
          alert(`
            ${languageText.computer}: ${inputComputer}
            ${languageText.player}: ${inputPlayer}
            ${languageText.loss}`);
          result.computer += 1;
          runGame();
        }
      };

      runGame();
    };
  };
  window.gameRPS = game;
})();
