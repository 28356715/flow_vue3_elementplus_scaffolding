 pub contract HelloWorld {

    // pub event IssuedGreeting(greeting:String)

    pub fun sayHi(name:String):String {
        let greeting =  "hi,".concat(name)

       // emit IssuedGreeting(greeting:greeting)
        
        return greeting
    }
}