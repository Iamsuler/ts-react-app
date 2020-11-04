import React, { Component } from 'react'
import { Button } from 'antd'

interface Greeting {
  name: string;
  firstName?: string;
  lastName?: string;
}

interface HelloState {
  count: number
}

class HelloClass extends Component<Greeting, HelloState> {
  constructor (props: Greeting) {
    super(props)
    this.state = {
      count: 0
    }
  }

  setCount () {
    let { count } = this.state
    this.setState({
      count: ++count
    })
  }

  render () {
    return(
      <>
        <p>你点击了 {this.state.count}</p>
        <Button onClick={ () => { this.setCount() } }>
          hello { this.props.name }
        </Button>
      </>
    )
  }
}

export default HelloClass
