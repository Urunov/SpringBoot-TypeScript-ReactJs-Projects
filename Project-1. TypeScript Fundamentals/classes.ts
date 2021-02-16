class Typescript{
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name:string){
        return `[${name}]: Type script version is ${this.version}` 
    }
}

class Car{
    readonly model: string 
    readonly nubmerOfWheels: number = 4

    constructor(theModel: string){
        this.model = theModel
    }
}

class CarBMW{
    readonly nubmberofWheels: number = 6
    constructor(readonly model: string) {

    }
}


class Animal {
    //
    protected voice: string =''
    public color: string = 'black'

    constructor() {
        this.go()
    }

    private go(){
        console.log('Go')
    }
}

class Cat extends Animal{
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()
cat.setVoice('miya')
console.log(cat.color)

//-----------------------------------------
abstract class Component {
    abstract render() : void 
    abstract info(): string
}
class AppComponent extends Component {
    render(): void {
        console.log('component on rende')
    }

    info(): string{
        return 'This is information about proceeding'
    }
}