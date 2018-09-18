var firstCheck = false,
    secondCheck = false,
    access = firstCheck ? "Access denied" : secondCheck ? "Access denied" : "Access granted";


function acessoTernario(firstCheck, secondCheck, juros) {
    var taxa = 2

    if (Boolen(firstCheck) === true) {
        taxa = (taxa * juros) + 1
        return  { message: "Access denied", taxa: taxa }
    }
    
    if (secondCheck) {
        taxa = taxa * (juros - 1)
        return { message: "Access denied", taxa: taxa }
    }
    
    return { message: "Access granted", taxa: taxa }
}


console.log('ACCESS ==>>>>>', acessoTernario(0, {}, 10)); // logs "Access granted"
