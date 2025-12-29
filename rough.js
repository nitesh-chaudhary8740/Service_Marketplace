function f(){console.log("f1",this)}
// function f(){console.log("f2")}
// f()
const a = ()=>{
    console.log(this)
}
a()