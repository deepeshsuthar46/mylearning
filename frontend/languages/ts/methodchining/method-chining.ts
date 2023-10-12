class Human{
    eyes:String
    nose:String
    withEyse(){
        console.log('watch')
        return this
    }
    withNose(){
        console.log('breath')
    }
}

let Shshi=new Human()
 Shshi.withEyse().withNose()