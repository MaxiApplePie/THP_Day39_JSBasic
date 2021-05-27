/*Si on lui pose une userSpeak (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
Pour tout autre phrase que tu lui envoies, le bot répond "balek." ;*/

userSpeak = prompt("Bonjour, qu'as tu à me dire?")
while (userSpeak !== "exit") {
    if (userSpeak.endsWith("?")) {
        console.log("Ouais Ouais...")
    } else if (userSpeak.length === 0) {
        console.log("t'es en PLS ?")
    } else if (userSpeak === userSpeak.toUpperCase()) {
        console.log("Pwa, calme-toi...")
    } else if (userSpeak.toLocaleLowerCase().includes("fortnite")) {
        console.log("on s'fait une partie soum-soum ?")
    } else {
        console.log("balek.")
    }
    userSpeak = prompt("Bonjour, qu'as tu à me dire?")
}