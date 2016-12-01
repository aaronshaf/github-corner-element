This builds on the work of [tholman](https://github.com/tholman/github-corners).

See the [demo](https://aaronshaf.github.io/github-corner-element/).

## Installation

```html
<!-- Custom Elements polyfill (2.9KB) -->
<script src="https://unpkg.com/@webcomponents/custom-elements@1.0.0-alpha.3"></script>
```

```html
<!-- our custom element's source (6.1KB) -->
<script src="https://unpkg.com/github-corner@2.0.2"></script>
```

## Basic usage

```html
<github-corner>
  <a href="https://github.com/aaronshaf/github-corner-element">GitHub</a>
</github-corner>
```

Specify colors:

```html
<github-corner fill="white" color="black">
  <a href="https://github.com/aaronshaf/github-corner-element">GitHub</a>
 </github-corner>
```

Move it to the left:

```html
<github-corner position="left">
  <a href="https://github.com/aaronshaf/github-corner-element">GitHub</a>
</github-corner>
```
