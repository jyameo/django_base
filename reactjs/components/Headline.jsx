import React from "react"

export default class Headline extends React.Component {
  render() {
    return (
      <h1> REACT-DJANGO!!!!{ this.props.children }</h1>
    )
  }
}
