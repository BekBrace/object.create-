const gamersPrototypes = {
  introducing: function () {
    return `My name is ${this.firstName} ${this.lastName} and I love ${this.game}`;
  },
  newFavoriteGame: function (newGame) {
    this.game = newGame;
  },
};

const amir = Object.create(gamersPrototypes);
amir.firstName = "Amir";
amir.lastName = "Bekhit";
amir.game = "Days Gone";

amir.newFavoriteGame("Resident Evil 2 Remake");

console.log(amir);
console.log(amir.introducing());
