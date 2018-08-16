/*
Task 0
Напишите функцию которая будет складывать два числа.
Входные параметры всегда строка.

*/

const solution = (strA, strB) => {
    const reversedStrA = strA.split('').reverse();
    const reversedStrB = strB.split('').reverse();

    let resultOfSum;

    if(reversedStrA.lenght > reversedStrB.lenght) {
        resultOfSum = sum(reversedStrA, reversedStrB);
    } else {
        resultOfSum = sum(reversedStrB, reversedStrA);
    }

    return resultOfSum.reverse().join('');
};

function sum(biggestStr, smallestStr) {
    let remainder = 0;

    return biggestStr.reduce((output, num, i) => {
        const lengthOfSmallestStr = smallestStr.length + 1;
        
        const numA = parseInt(num, 10) || 0;
        const numB = parseInt(smallestStr[i], 10) || 0;
        const lastIndex = biggestStr.length - 1;

        if(i > lengthOfSmallestStr) {
            remainder = 0;
        }
        
        const sum = (numA + numB + remainder).toString();

        if(sum > 9) {
            const firstNum = parseInt(sum[0], 10);
            const secondNum = parseInt(sum[1], 10);

            remainder = firstNum;
            output.push(secondNum);
            if(lastIndex === i) {
                output.push(firstNum);
            }
        } else {
            output.push(parseInt(sum, 10));
            remainder = 0;
        }

        return output;
    }, []);
}

console.log(solution('9', '08'));
console.log(solution('2987654', '45678'));
console.log(solution('123456789', '987654322'));
console.log(solution('945521', '823864'));
console.log(solution(
    '823094582094385190384102934810293481029348123094818923749817',
    '234758927345982475298347523984572983472398457293847594193837')
);
console.log(
    solution('987429134712934876249385134781395873198472398562384958739845234859234758913759182357398457398474598237459823745928347538835743829547328954732895474893754893753281957319857432958432548937859483265893274891378593187431583942678439217431924789835743829547328954732895474893754893753281957319857432958432548937859483265893274891378593187431583942678439217431924789835743829547328954732895474893754893753281957319857432958432548937859483265893274891378593187431583942678439217431924789835743829547328954732895474893754893753281957319857432958432548937859483265893274891378593187431583942678439217431924789',
     '835743829547328954732895474893754893753281957319857432958432548937859483265893274891378593187431583942678439217431924789')
);
console.log(
    solution('666666665656566666666565656666666656565666666665656566666666835743829547328954732895474893754893753281957319857432958432548937859483265893274891378593187431583942678439217431924789835743829547328954732895474893754893753281957319857432958432548937859483265893274891378593187431583942678439217431924789',
     '464646464646464644646464646464646464646464646463463463463466')
);
console.log(
    solution('854694587458967459867923420398420394845873945734985374844444',
     '333333333333439439483948394839834938493843948394839432322229')
)