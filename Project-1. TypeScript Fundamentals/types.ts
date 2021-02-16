
const count: number = 324

const isFetching: boolean = true
const isLoading: boolean = false
// --------------------------------

const int: number = 42
const float: number = 4.4
const num: number = 456
const message: string = 'String type in TypeSctipt'

//------Array ---------------
const numberArray: number[] = [12, 43,2 ,53, 5 ,67, 7, 7, 7]
const numberArray2: Array<number> = [54, 5, 2, 1, 342, 323 ,2323 ,23]
const words: string[] = ['hello', 'main', 'process', 'in ', 'progress']

// ------------Tuple -----------------
const contact: [string, number] = ['Vladimir Feyodirvich', 1932]

// ---------------Any type support -----------------

let variables: any = 434 // let declaration
variables = 'New York'
variables = []

console.log(variables)

// ---------------------------------------------------
function sayMyName(name: String): void{
    console.log(name)
}

sayMyName('Hayzenberg in Russia')
//----------------------------------------------------
// Never 
function throwError(message: string)
{
    for(let i=0; i< 10; i++){
        throw new Error(message)
    }
}

function infinite(): never{
    while(true){

    }
}

// Type
type Login = string
const login: Login = 'admin'
console.log("login: "+ login)

type ID = string | number | boolean
const id1: ID = 1234
const id2: ID = '1234'
const id3: ID = true

//-----------------------------
type SomeType  = string | boolean | null
const upwork: SomeType = '323'
console.log(upwork)