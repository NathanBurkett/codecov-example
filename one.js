function one({ item }) {
    switch (item) {
        case 'one': {
            console.log('Success!');
            return true;
        }
        case 'two': {
            console.log('WRONG');
            return false;
        }
        case 'three': {
            console.log('WRONG');
            return false;
        }
        default: {
            return false;
        }
    }
}
module.exports = one;
