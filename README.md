This builds on the work of [tholman](https://github.com/tholman/github-corners).

See the [demo](https://aaronshaf.github.io/github-corner-element/).

## React custom element boilerplate

```html
<!-- Custom Elements polyfill (2.9KB) -->
<script src="https://unpkg.com/@webcomponents/custom-elements@1.0.0-alpha.3"></script>
```

```html
<!-- our custom element's source (6.1KB) -->
<script src="https://unpkg.com/github-corner@1.0.12"></script>
```

Basic usage:

```html
<github-corner href="https://github.com/aaronshaf/github-corner-element"></github-corner>
```

Specify colors:

```html
<github-corner href="https://github.com/aaronshaf/github-corner-element" fill="white" color="black"></github-corner>
```

Move it to the left:

```html
<github-corner href="https://github.com/aaronshaf/github-corner-element" position="left"></github-corner>
```
