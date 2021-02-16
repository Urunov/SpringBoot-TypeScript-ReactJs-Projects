var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function (name) {
        return "[" + name + "]: Type script version is " + this.version;
    };
    return Typescript;
}());
var Car = /** @class */ (function () {
    function Car(theModel) {
        this.nubmerOfWheels = 4;
        this.model = theModel;
    }
    return Car;
}());
var CarBMW = /** @class */ (function () {
    function CarBMW(model) {
        this.model = model;
        this.nubmberofWheels = 6;
    }
    return CarBMW;
}());
var Animal = /** @class */ (function () {
    function Animal() {
        //
        this.voice = '';
        this.color = 'black';
        this.go();
    }
    Animal.prototype.go = function () {
        console.log('Go');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
    };
    return Cat;
}(Animal));
var cat = new Cat();
cat.setVoice('miya');
console.log(cat.color + cat.setVoice('miyyya'));
//-----------------------------------------
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.render = function () {
        console.log('component on rende');
    };
    AppComponent.prototype.info = function () {
        return 'This is information about proceeding';
    };
    return AppComponent;
}(Component));
