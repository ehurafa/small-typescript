// boolean (true/false)
let isOpen: boolean

isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

// numer
let total: number
total = 0xff0

// array (type[])
let items: number[]
items = [1, 2, 3]

let num: Array<number>
num = [1, 2, 3]

// tuple
let title: [number, string]
title = [1, 'bar']

// enum
enum Colors {
    white = '#fff',
    black = '#000'
}


// any (qualquer coisa)
let coisa: any
coisa = [1, 'dois']

// void (vazio)
function logger() {
    console.log('foo')

}


// null | undefined
type baz = string | undefined

// never
function error(): never {
    throw new Error('error');
}

// object
let cart: object
cart = {
    key: 1
}