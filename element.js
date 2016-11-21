/** @jsx preact.h */
import preact from 'preact'
import GitHubCorner from './components'

export default class GithubCornerElement extends BabelHTMLElement {
  static get observedAttributes() { return ['fill', 'color', 'href', 'position'] }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'fill':
      case 'color':
      case 'href':
      case 'position':
        this[name] = newValue
    }
    if (this.rendered) { this.updateRendering() }
  }

  connectedCallback () {
    this.a = this.querySelector('a')

    // screenreader-only styles
    Object.assign(this.a.style, {
      border: '0',
      clip: 'rect(0 0 0 0)',
      height: '1px',
      margin: '-1px',
      overflow: 'hidden',
      padding: '0',
      position: 'absolute',
      width: '1px'
    })
    this.updateRendering()
  }

  updateRendering () {
    preact.render(<GitHubCorner
      color={this.color}
      fill={this.fill}
      a={this.a}
      position={this.position}
    />, this, this.lastChild)
    this.rendered = true
  }
}

// https://github.com/w3c/webcomponents/issues/587#issuecomment-254126763
function BabelHTMLElement() {
  const newTarget = this.__proto__.constructor
  return Reflect.construct(HTMLElement, [], newTarget)
}
Object.setPrototypeOf(BabelHTMLElement, HTMLElement)
Object.setPrototypeOf(BabelHTMLElement.prototype, HTMLElement.prototype)
