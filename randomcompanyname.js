let adj = {
    "0" : "Crazy",
    "1" : "Amazing",
    "2" : "Fire",
}

let shop = {
    "0" : "Engine",
    "1" : "Foods",
    "2" : "Garments",
}


let another = {
    "0" : "Bros",
    "1" : "Limited",
    "2" : "Hub",
}

 let a = Math.floor((Math.random() * 3))
let r1 = (adj[a])

let b = Math.floor((Math.random() * 3))
let r2 = (shop[b])

let c = Math.floor((Math.random() * 3))
let r3 = (another[c])

//final output

console.log(r1+" " +r2 + " " +r3)