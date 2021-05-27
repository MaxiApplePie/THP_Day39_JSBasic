answer = prompt("De quel nombre veux-tu calculer la factorielle ?");
if (answer > 1) {
    let fact = 1
    for (let i = 1; i < answer; i++) {
        fact = fact * i
    }
    console.log(`Le résultat est : ${fact}`);
}