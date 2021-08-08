const math = require('./add');
module.exports = class User{
    constructor(name, password){
        this.name = name;
        this.password = password;
    }
    getUser(){
        return this.name;
    }
   async add(){
        return math.add(1,2);
    }

    toString(){
        return `name=${this.name}`;
    }
}