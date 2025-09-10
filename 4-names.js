const secret= "Super Secret";
const peter = "peter";
const john ="john";
module.exports = [secret , peter, john];
module.exports.say_hi = ()=>[1,3,4,5,5,6].reduce((acc , x)=>acc+x , 0)
console.log(module);