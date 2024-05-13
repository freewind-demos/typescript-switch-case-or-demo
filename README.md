TypeScript Switch Case Or Demo
===========================

`case 2|3`实际上等于 `case 3`
`case 2||3`实际上等于 `case 2`

没有什么特别的语法，只是 `|`与`||`这两个运算符本身的作用

还是得写成多个case:

```
case 2:
case 3: {
    ...
}
```

```
npm install
npm start
```

Note:

`esModuleInterop` is recommended to set to `true`,
since we can have consistent importing syntax with babel,
always use:

```
import some from 'some'
```

