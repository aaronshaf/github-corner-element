This build's on the work of [tholman](https://github.com/tholman/github-corners).

## React custom element boilerplate

```html
<!-- customElements polyfill (12.2KB) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/document-register-element/1.1.1/document-register-element.js"></script>
```

```html
<!-- our custom element's source (6.1KB) -->
<script src="https://unpkg.com/github-corner"></script>
```

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
