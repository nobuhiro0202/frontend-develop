function devisor(num) {
    var results = [];
    for (var i = 1; i<= num; i++) {
        if (num % i === 0) {
            results.push(i);
        }
    }
    return results;
}
console.log(devisor(1024));