// Typescript casting and assertion
// Tell TypeScript compiler about how to interpret types and it comes into play when we work with the Dom(document object model)

type One = string
type Two = string | number
type Three = 'hello'

//convert to more or less specific
let ab: One = 'hello'
let bb = ab as Two //less specific
let cb = ab as Three //more specific

// in a TypeScript file with JSX syntax (.tsx), angle bracket syntax for type assertions is not allowed because it conflicts with JSX elements. In these situations, you should use the as keyword for type assertions instead.
let d = <One>'world'
let e = <string | number>'world'

const addOrCancat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') {
        return a + b
    }
    return '' + a + b
}
//if without assertion, TS will consider myVal is just not good with only string while the expected returning is a union with number and string. So we can use as assertion to let TS know the returning is a string type
let myVal:string = addOrCancat(2,2,'concat') as string
//Be careful TS sees no problem here but a string is returned
let nextVal:number = addOrCancat(2,2,'concat') as number

// bad takes because it overwrite the rule of TS
(10 as unknown) as string