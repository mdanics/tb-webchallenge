module.exports.calculate = (n) => {

    const upperLimit = Math.sqrt(n);


    const boolArray = [];
    const primes = [];
    let medians = [];

    for (let i = 0; i < n; i++) {
        boolArray.push(true)
    }


    for (let i = 2; i <= upperLimit; i++) {
        if (boolArray[i]){
            for (let j = i * i; j < n; j += i){
                boolArray[j] = false
            }
        }
    }

    for (let i = 2; i <= n; i++){
        if (boolArray[i])
            primes.push(i)
    }


    // get median primes

    const half = Math.floor(primes.length / 2);
    if (primes.length % 2 === 0){
        medians = [primes[half - 1], primes[half]]
    } else {
        medians = [primes[half]]
    }


    return medians
};
