# react-resizable-rotatable-draggable-radiusable-rectangle

[![NPM](https://img.shields.io/npm/v/react-resizable-rotatable-draggable-radiusable.svg)](https://www.npmjs.com/package/react-resizable-rotatable-draggable-radiusable) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A react widget that can be resized and rotated via a handler.

The mother of this library is "react-resizable-rotatable-draggable" which is npm package.
Additionaly this library has feature of changing radius and customizable press shift key + (drag, resize, radius)

### Installation

```bash
npm install --save react-resizable-rotatable-draggable-radiusable
```

Then you will need to install peer dependency

```bash
npm install --save styled-components
```

### Usage

```jsx
import React, { Component } from 'react'
import ResizableRect from 'react-resizable-rotatable-draggable-radiusable'

class App extends Component {
  constructor() {
    super()
    this.state = {
      width: 100,
      height: 100,
      top: 100,
      left: 100,
      rotateAngle: 0,
      borderRadius: {
        rtl: 0,
        rtr: 0,
        rbr: 0,
        rbl: 0,
      }
    }
  }

  handleResize = (style, isShiftKey, type) => {
    // type is a string and it shows which resize-handler you clicked
    // e.g. if you clicked top-right handler, then type is 'tr'
    let { top, left, width, height, radius } = style
    top = Math.round(top)
    left = Math.round(left)
    width = Math.round(width)
    height = Math.round(height)
    borderRadius = radius
    this.setState({
      top,
      left,
      width,
      height,
      borderRadius
    })
  }

  handleRotate = (rotateAngle) => {
    this.setState({
      rotateAngle
    })
  }

  handleDrag = (deltaX, deltaY) => {
    this.setState({
      left: this.state.left + deltaX,
      top: this.state.top + deltaY
    })
  }

  render() {
    const {width, top, left, height, rotateAngle} = this.state
    return (
      <div className="App">
        <ResizableRect
          left={left}
          top={top}
          width={width}
          height={height}
          rotateAngle={rotateAngle}
          // aspectRatio={false}
          // minWidth={10}
          // minHeight={10}
          zoomable="n, w, s, e, nw, ne, se, sw, rne, rnw, rse, rsw"
          defaultProportionalZoomable="nw, ne, se, sw, rne, rnw, rse, rsw"
          // rotatable={true}
          // onRotateStart={this.handleRotateStart}
          onRotate={this.handleRotate}
          // onRotateEnd={this.handleRotateEnd}
          // onResizeStart={this.handleResizeStart}
          onResize={this.handleResize}
          // onResizeEnd={this.handleUp}
          // onDragStart={this.handleDragStart}
          onDrag={this.handleDrag}
          // onDragEnd={this.handleDragEnd}
        />
      </div>
    )
  }
}

export default App
```

### Props

| Props       |  Type                   | Default | Example                               |
|:-----------:|:-----------------------:|:-------:|:-------------------------------------:|
|left         | number.isRequired       |         | 10                                    |
|top          | number.isRequired       |         | 10                                    |
|width        | number.isRequired       |         | 100                                   |
|height       | number.isRequired       |         | 100                                   |
|rotateAngle  | number                  | 0       | 0                                     |
|rotatable    | bool                    | true    | true                                  |
|zoomable     | string                  | ''      | 'n, w, s, e, nw, ne, se, sw'          |
|minWidth     | number                  | 10      | 0                                     |
|minHeight    | number                  | 10      | 0                                     |
|aspectRatio  | number (width / height) |         | 1(which makes the rectangle a square) |
|onRotateStart| func                    |         |                                       |
|onRotate     | func                    |         | (rotateAngle)                         |
|onRotateEnd  | func                    |         |                                       |
|onResizeStart| func                    |         |                                       |
|onResize     | func                    |         | (style, isShiftKey, type)             |
|onResizeEnd  | func                    |         |                                       |
|onDragStart  | func                    |         |                                       |
|onDrag       | func                    |         | (deltaX, deltaY)                      |
|onDragEnd    | func                    |         |                                       |

## License

MIT © [minhaj57sorder](https://github.com/minhaj57sorder)