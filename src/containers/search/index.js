import React, { Component } from 'react'

class Search extends Component {
  state = {
    track: null,
    api_key: 'dae91d2e755b5e29e7adf81d7897a7d0',
    url: 'http://ws.audioscrobbler.com/2.0/?method=track.search&'
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = () => {
    const { track, api_key, url } = this.state

    let finalUrl =
      url + 'track=' + track + '&api_key=' + api_key + '&format=json'

    fetch(finalUrl).then(response => console.log(response))
  }

  render() {
    console.log(this.state.track)
    return (
      <div>
        <input
          name="track"
          onChange={this.handleChange}
          value={this.state.track}></input>
        <button onClick={this.handleSubmit}>Search</button>
      </div>
    )
  }
}

export default Search
