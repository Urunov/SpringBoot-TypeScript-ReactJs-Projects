function add(a: number, b: number): number {
    return a + b
}

function toUpperCase(str: string): string {
    //
    return str.trim().toUpperCase()
}

interface MyRealPosition {
    x: number | undefined
    y: number | undefined
}

interface MyPositonWithDefault extends MyRealPosition{
    default: string
}

function position(): MyRealPosition
function position(a: number) : MyPositonWithDefault
function position(a: number, b: number):MyRealPosition

function position(a?: number, b?: number){
    if(!a && b) {
        return{x: undefined, y: undefined}
    }

    if(a && !b) {
        return{x: a, y: undefined, default: a.toString()}
    }

    return{x: a, y: b}
}

console.log('Empty', position())
console.log('One param', position(43))
console.log('Two params', position(10, 15))