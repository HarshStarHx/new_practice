//os is a built in module of the node js
// we don't need to install it from npm
const os= require("os");
console.log(os.platform() , os.type());// to know the platform and type of the os  arm64
console.log(os.arch()); //to know the architecture of the os
console.log("the userInfo is inthe operating system " , os.userInfo());
console.log("the system uptime is " , os.uptime() , "seconds");
let val = {
    name:os.type(),
    platform:os.platform()
    ,
    freemen:os.freemem(),
    totalmen:os.totalmem()
}

console.log(os.version());
const user = os.userInfo();
console.log(user.name);
console.log(user.homedir);
console.log(user.shell);
console.log(user.gid);
console.log(user.uid);
console.log(user.username);

console.log(__dirname);
console.log(__filename);
console.log(os.cpus());