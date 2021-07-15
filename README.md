# xeact-components

xeact 示例组件库

## 如何开始

1. 构建

```shell
yarn build
```

2. 在 HTML 中引用

```html

<link href="../xeact-components/dist/index.css" rel="stylesheet"/>
<script src="../xeact-components/dist/index.js"></script>
```

3. 使用

```html

<x-root class="content">
  <x-sample id="sample" say="hi">
    I am inside &lt;x-sample&gt;
  </x-sample>
  <button class="btn btn-sm btn-secondary" id="change">Say Something</button>
</x-root>
```
