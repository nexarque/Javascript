//Variables And Constants
const accountId =  1234
let accountemail = " test@email.com"
let accountpasswd = " 123456"
let accountcity = "Nanded"

//var let const used to store values in memory
//prefer not to use var cuz of issue in block scope and functional scope
//const can't be changed

accountemail = "test1@gmail.com"
accountpasswd = "12345678"
accountcity = "Hydrabad"
console.table([accountId,accountemail,accountpasswd,accountcity])

//{} -- this is scope
//if you declared an variable and doesn't provided any value then it will print undefined

