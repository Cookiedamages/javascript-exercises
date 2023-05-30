const sumAll = function(int1, int2) {
    function getNumber() {
        let sum = int1 + int2;
        const start = Math.min(int1, int2);
        const end = Math.max(int1, int2);

        if (int1 < -1 ||
            int2 < -1 ||
            typeof int1 !== 'number' ||
            typeof int2 !== 'number')
        return 'ERROR';

        for (let i = start + 1; i < end; i++) {
            sum += i;
        }
        return sum;
    }

    const result = getNumber();
    return result;
};

let sum = sumAll(1, 4);
console.log(sum);

// Do not edit below this line
module.exports = sumAll;
