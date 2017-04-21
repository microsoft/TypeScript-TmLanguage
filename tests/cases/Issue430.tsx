// @onlyOwnGrammar - As this has jsx
class c {
render() {
    return this.props.data.weekDays.filter((weekDay, index) => (this.state.showAll || index < 3)).map((weekDay, key) => (
      <p key={key}>
        {weekDay.label} {this.props.data[weekDay.id].start} - {this.props.data[weekDay.id].finish}
      </p>
    ))
  }
}