import React, { Component, Fragment } from 'react'
import axios from '../../utils/request'

export default class index extends Component {
  componentDidMount () {
    axios.get("/home/swiper").then(res => {
      console.log(res);

    })
  }
  render () {
    return (
      <Fragment>
        Home
      </Fragment>
    )
  }
}
