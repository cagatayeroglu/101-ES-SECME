function assignTeams() {
  // oyuncu isimlerini al
  const player1 = document.getElementById("player1").value;
  const player2 = document.getElementById("player2").value;
  const player3 = document.getElementById("player3").value;
  const player4 = document.getElementById("player4").value;

  // oyuncuları bir diziye ekle
  const players = [player1, player2, player3, player4];

  // oyuncuları karıştır
  players.sort(() => Math.random() - 0.5);

  // takımları oluştur
  const team1 = `${players[0]} ve ${players[1]}`;
  const team2 = `${players[2]} ve ${players[3]}`;

  // sonucu ekrana yaz
  document.getElementById("team1").innerText = `Takım 1: ${team1}`;
  document.getElementById("team2").innerText = `Takım 2: ${team2}`;
}

// Zar atma simülasyonu
function rollDice() {
  // İlk oyuncunun zarı
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
  var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
  var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSource);

  // İkinci oyuncunun zarı
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  // Kazananı belirle
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

// Sayfa yüklenince dinleyiciler ekle
document.addEventListener("DOMContentLoaded", function () {
  // Zar atma butonunu bağla
  const rollDiceButton = document.getElementById("rollDiceButton");
  if (rollDiceButton) {
    rollDiceButton.addEventListener("click", rollDice);
  }

  // Eşleştirme butonunu bağla
  const assignTeamsButton = document.getElementById("assignTeamsButton");
  if (assignTeamsButton) {
    assignTeamsButton.addEventListener("click", assignTeams);
  }
});
