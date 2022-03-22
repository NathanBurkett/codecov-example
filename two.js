function two({ item }) {
    switch (item) {
        case 'one': {
            console.log('WRONG');
            return false;
        }
        case 'two': {
            console.log('Success!');
            return true;
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
module.exports = two;
