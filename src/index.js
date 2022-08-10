const monoConfig = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const exceptions = {
    '2': 'twen',
    '3': 'thir',
    '4': 'for',
    '5': 'fif',
    '8': 'eigh'
};

module.exports = function toReadable(number) {
    console.log(number)
    const length = `${number}`.length;
    if (length === 1) {
        return monoConfig[number];
    }
    if (length === 2) {
        return binary(number);
    }
    if (length === 3) {
        const [first, second, third] = `${number}`.split('');
        if (second === '0' && third === '0') {
            return `${monoConfig[+first]} hundred`;
        } else if (second === '0') {
            return `${monoConfig[+first]} hundred ${monoConfig[+third]}`;
        } else
            return `${monoConfig[+first]} hundred ${binary(+`${second}${third}`)}`;
    }
}

function binary(number) {
    switch (number) {
        case 10: return 'ten'
        case 11: return 'eleven';
        case 12: return 'twelve';
        case 14: return 'fourteen';
        default: {
            const [first, second] = `${number}`.split('');
            if (number < 20) {
                return `${exceptions[second] || monoConfig[+second]}teen`;
            }
            return `${exceptions[first] || monoConfig[+first]}ty${second === '0' ? '' : ' ' + monoConfig[+second]}`;
        }
    }
}