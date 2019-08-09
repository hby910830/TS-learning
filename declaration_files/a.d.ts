declare function y(a: number, b: number): number; //declare也可以写成export

// export function add2(a: number): string  // 第一种写法
declare function add2(a: number): string    // 第二种写法
export {add2}

export default y