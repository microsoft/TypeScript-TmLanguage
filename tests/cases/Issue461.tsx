// @onlyOwnGrammar - As this has jsx
class Foo {
  renderProgress = () =>
    <b className={this.props.className}>x</b>

  render () {
    return (
      <div className={this.state.loaded ? '' : styles.containerUnloaded}>
        {!this.state.loaded && this.renderProgress()}
      </div>
    )
  }
}