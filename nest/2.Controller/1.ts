interface Obj {
    a: number,
    b?: number
}

const obj: Obj = {a: 1}

console.log(Reflect.get(obj, 'a'))
