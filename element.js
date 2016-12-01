/** @jsx preact.h */
import preact from 'preact'
import GitHubCorner from './components'
import createElementClass from 'create-element-class'

const GithubCornerElement = createElementClass({
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'fill':
      case 'color':
      case 'href':
      case 'position':
        this[name] = newValue
    }
    if (this.rendered) { this.updateRendering() }
  },

  connectedCallback () {
    this.a = this.querySelector('a')

    // screenreader-only styles
    const styles = {
      border: '0',
      clip: 'rect(0 0 0 0)',
      height: '1px',
      margin: '-1px',
      overflow: 'hidden',
      padding: '0',
      position: 'absolute',
      width: '1px'
    }
    // Object.assign not supported on IE11
    Object.keys(styles).forEach((key) => {
      this.a.style[key] = styles[key]
    })
    this.updateRendering()
  },

  updateRendering () {
    preact.render(<GitHubCorner
      color={this.color}
      fill={this.fill}
      a={this.a}
      position={this.position}
    />, this, this.lastChild)
    this.rendered = true
  }
})

GithubCornerElement.observedAttributes = ['fill', 'color', 'href', 'position']
export default GithubCornerElement
