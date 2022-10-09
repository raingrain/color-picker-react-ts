# color-picker-react-ts

### 一个用[React](https://github.com/facebook/react)、[TS](https://www.typescriptlang.org/)、[Scss](https://sass-lang.com/)、[ClipboardJS](https://clipboardjs.com/)制作的颜色选择器

> - ***坑***
>   - 怎么在TSX中设置事件的类型， 即 `event: ChangeEvent<HTMLInputElement>`
>   - 怎么实现useRef的泛型接口，如 `useRef<HTMLDivElement>(null)` 
>   - 怎么通过非空断言 `!` 使用 `.current`，如 `showColorInput.current!.value = color;`
>   - 如何不使用一些将要废弃的API来实现剪贴板功能
