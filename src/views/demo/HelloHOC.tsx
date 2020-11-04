import React, { Component, ComponentType } from 'react'
import HelloClass from './HelloClass'

interface Loading {
  loading: boolean
}

function HelloHOC<P> (WrapperedComponent: ComponentType<P>) {
  return class extends Component<P & Loading> {
    render () {
      const { loading, ...props } = this.props
      return loading ? <div>loading...</div> : <WrapperedComponent { ...props as P }></WrapperedComponent>
    }
  }
}

export default HelloHOC(HelloClass)
