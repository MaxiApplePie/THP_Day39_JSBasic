arn0 = "UUACGCAGUAGA";
arn1 = "CCGUCGUUGCGCUACAGC";
arn2 = "CCUCGCCGGUACUUCUCG";

function translate(arnToAnalyse) {
    let arrayARN = []
    let arnTransArray = []
    for (let count = 0; count <= arnToAnalyse.length - 1; count = count + 3) {
        arrayARN.push(arnToAnalyse.slice(count, count + 3));
        let part = arnToAnalyse.slice(count, count + 3)
        if (part === "UCU" || part === "UCC" || part === "UCA" || part === "UCG" || part === "AGU" || part === "AGC") {
            arnTransArray.push("Sérine")
        } else if (part === "CCU" || part === "CCC" || part === "CCA" || part === "CCG") {
            arnTransArray.push("Proline")
        } else if (part === "UUA" || part === "UUG") {
            arnTransArray.push("Leucine")
        } else if (part === "UUU" || part === "UUC") {
            arnTransArray.push("Phénylalanine")
        } else if (part === "CGU" || part === "CGC" || part === "CGA" || part === "CGG" || part === "AGA" || part === "AGG") {
            arnTransArray.push("Arginine")
        } else if (part === "UAU" || part === "UAC") {
            arnTransArray.push("Tyrosine")
        }
    }
    console.log(arrayARN);
    console.log("=>");
    console.log(arnTransArray);
    console.log("ou");
    console.log(`${arnToAnalyse}=>${arnTransArray.join("-")}`);
}
translate(arn0);
translate(arn1);
translate(arn2);