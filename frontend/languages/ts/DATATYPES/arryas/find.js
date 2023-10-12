let fruites=[{a:'apple',b:'banana'},
{a:'apple',b:'banana',c:'cucumber'}
,{a:'apple',b:'banana',c:'cucumber',d:'drygon fruites'}]
let finding=fruites.find((item)=>{return item.d=='drygon fruites'})
console.log( finding)
let finding1=fruites.filter((item)=>{return item.c=='cucumber'})
console.log( finding1)