/** @jsx preact.h */
import preact from 'preact'
import GitHubCorner from './components'

export default class GithubCornerElement extends HTMLElement {
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
    this.updateRendering()
  }

  updateRendering () {
    preact.render(<GitHubCorner
      color={this.color}
      fill={this.fill}
      href={this.href}
      position={this.position}
    />, this, this.lastChild)
    this.rendered = true
  }
}
