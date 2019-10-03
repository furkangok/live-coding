import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './style.css'

import { api_key, api_base_url, saveTrackList } from '../../modules/counter'

class Search extends Component {
  state = {
    track: ''
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = () => {
    const { track } = this.state

    let finalUrl =
      api_base_url + 'track=' + track + '&api_key=' + api_key + '&format=json'

    fetch(finalUrl)
      .then(response => response.json())
      .then(response =>
        this.props.saveTrackList(response.results.trackmatches.track)
      )
  }

  render() {
    let trackList
    if (this.props.trackList) {
      trackList = this.props.trackList.map(track => {
        return (
          <div className="track-container">
            <img src={track.image[0]['#text']} className="track-image"></img>
            <div className="track-artist">{track.artist}</div>
            <div className="track-name">{track.name}</div>
          </div>
        )
      })
    }
    return (
      <div>
        <input
          name="track"
          onChange={this.handleChange}
          value={this.state.track}></input>
        <button onClick={this.handleSubmit}>Search</button>
        <div className="container">
          <div className="track-list-container">{trackList}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    trackList: state.counter.trackList
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      saveTrackList
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
