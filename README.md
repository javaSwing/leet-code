# leet-code

## 小Tips

### `++i`与`i++`的区别

```js
let i = 0; 
let a = i++;
console.log(i); // 1
console.log(a) // 0
```

```js
let i = 0;
let a = ++i; 
console.log(i); // 1
console.log(a)  // 1
```

从上面的结果可以看得出来 `i++` 是先赋值后运算，而`++i`为先运算后赋值
