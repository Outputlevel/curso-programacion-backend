//Determinar cuál será la salida en los 3 casos
//1ra Promesa
Promise.resolve(20)
.then( x => x + 1 )
.then( x => x * 2 )
.then( x => {
    if(x==22) throw 'Error'
    else return 80
})
.then( x => 30 )
.then( x => x / 2 )
.then( console.log )
.catch( console.error )

//2da Promesa
Promise.resolve(10)
.then( x => x + 1 )
.then( x => x * 2 )
.then( x => {
    if(x==22) throw 'Error'
    else return 80
})
.then( x => 30 )
.then( x => x / 2 )
.then( console.log )
.catch( console.error )

//3ra Promesa
Promise.reject(30)
.then( x => x + 1 )
.then( x => x * 2 )
.then( x => {
    if(x==22) throw 'Error'
    else return 80
})
.then( x => 30 )
.then( x => x / 2 )
.then( console.log )
.catch( console.error )
