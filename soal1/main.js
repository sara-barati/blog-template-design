function SoftEngineeringClass(className,classUnit,classCapacity,book){
    this.className=className
    this.classUnit=classUnit
    this.classCapacity=classCapacity
    this.book=book
    this.prints=function(){
        console.log(`{className:${this.className},classsUnit:${this.classUnit},classsCapacity:${this.classCapacity},book:${this.book}}`);
    }
    
}
function NetWorkClass(className,classUnit,classCapacity,project){
    this.className=className
    this.classUnit=classUnit
    this.classCapacity=classCapacity
    this.project=project
    this.printn=function(){console.log(`{className:${this.className},classsUnit:${this.classUnit},classsCapacity:${this.classCapacity},project:${this.project}}`);
}

}
const soft=new SoftEngineeringClass("softEngineering",3,50,2)
soft.prints()
const net=new NetWorkClass("netWork",3,30,true)
net.printn()