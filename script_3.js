let answer;

answer = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
// Init
var global = ' ';
for (var count = 1; count < answer; count++) {
    // Init spaces
    global += ' ';
}
// Execution
var dieses = '#';
for (count = 1; count <= answer; count++) {
    console.log(global.substring(count) + dieses);
    dieses += '#';
}