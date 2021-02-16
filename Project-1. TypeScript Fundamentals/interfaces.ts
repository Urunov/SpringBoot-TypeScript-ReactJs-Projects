interface Rect {
    readonly id: string
    color?: string
    size :{
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1233',
    size: {
        width: 20, 
        height: 40
    }
}

const rect2: Rect = {
    id: '12345',
    size:{
        width: 221,
        height: 3
    }
}

rect2.color = 'black'

const rect3 = {} as Rect 
const rect4 = <Rect>{}

//---------------------------------
interface RectWithArea extends Rect {
    getArea: ()=> number
}

const rect5: RectWithArea = {
    id: '3433',
    size: {
        width: 434,
        height: 645
    },
    getArea(): number{
        return this.size.width * this.size.height
    }
}

// ---------------------Interface and class [intergration]----------
interface IClock {

    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void{ 
        this.time = date
    }
}

// ------------------------------------------------------------------

const css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}