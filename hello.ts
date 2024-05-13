function check(v: number) {
    switch (v) {
        case 1: {
            console.log("1")
            return;
        }
        case 2 || 3: {
            console.log('2 || 3')
            return;
        }
        case 2 | 3: {
            console.log('2 | 3')
            return;
        }
        default: {
            console.log('default')
            return;
        }
    }
}

// check(1)
// check(2)
// check(3)
// check(4)

console.log(2 | 3)
console.log(2 || 3)