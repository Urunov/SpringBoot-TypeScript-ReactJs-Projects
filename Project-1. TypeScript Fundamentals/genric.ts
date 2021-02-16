const arrayOfNumbers: Array<number> = [1, 2, 1, 3, 5, 6]
const arrayOfStrings: Array<string> = ['Hello', 'Vladimon']

function reverse<T> (array: T[]): T[] {
        return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfNumbers)