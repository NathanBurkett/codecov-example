function three({ item }) {
    switch (item) {
        case 'one': {
            console.log('WRONG');
            return false;
        }
        case 'two': {
            console.log('WRONG');
            return false;
        }
        case 'three': {
            console.log('Success!');
            return true;
        }
        default: {
            return false;
        }
    }
}
module.exports = three;
