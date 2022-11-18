// const tds = document.querySelectorAll('.board-item');

// setInterval(() => {
//   tds.forEach((el) => el.classList.remove('goblin'));
//   const randomNumber = Math.floor(Math.random() * tds.length);
//   tds[randomNumber].classList.add('goblin');
// }, 1000);

class GameController {
  constructor(element) {
    if (element) {
      this.element = element;
    }
    this.tds = this.element.querySelectorAll('.board-item');

    this.miss = 0;
    this.hit = 0;

    this.gameStart();
    this.registerEvents();
  }

  gameStart() {
    setInterval(() => {
      this.tds.forEach((el) => el.classList.remove('goblin'));
      const randomNumber = Math.floor(Math.random() * this.tds.length);
      this.tds[randomNumber].classList.add('goblin');
    }, 1000);
  }

  registerEvents() {
    this.element.addEventListener('click', (event) => {
      if (event.target.closest('.board-item.goblin')) {
        this.hit += 1;
      } else {
        this.miss += 1;
      }
    });
  }
}


class Board {
  constructor() {

  }

  render() {
    document.body.insertAdjacentHTML('beforeend', `
    <table class="board" cellspacing="10">
      <tr class="board-row">
        <td class="board-item goblin"></td>
        <td class="board-item">
          </div>
        <td class="board-item"></td>
        <td class="board-item">
          </div>
      </tr>
      <tr class="board-row">
        <td class="board-item"></td>
        <td class="board-item"></td>
        <td class="board-item"></td>
        <td class="board-item"></td>
      </tr>
      <tr class="board-row">
        <td class="board-item"></td>
        <td class="board-item">
          </div>
        <td class="board-item"></td>
        <td class="board-item">
          </div>
      </tr>
      <tr class="board-row">
        <td class="board-item"></td>
        <td class="board-item"></td>
        <td class="board-item"></td>
        <td class="board-item"></td>
      </tr>
    </table>
    `);
  }
}

const board = new Board();
board.render();

const controller = new GameController(document.querySelector('.board'));

controller.gameStart();
