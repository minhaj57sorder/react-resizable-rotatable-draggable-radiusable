import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Rect from './Rect'
import { centerToTL, tLToCenter, getNewStyle, degToRadian } from './utils'
const zoomableMap = {
    'n': 't',
    's': 'b',
    'e': 'r',
    'w': 'l',
    'ne': 'tr',
    'nw': 'tl',
    'se': 'br',
    'sw': 'bl',
    'rne': 'rtr',
    'rnw': 'rtl',
    'rse': 'rbr',
    'rsw': 'rbl',
}
export default class ReactResizer extends Component {
    static propTypes = {
        left: PropTypes.number.isRequired,
        top: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        rotatable: PropTypes.bool,
        rotateAngle: PropTypes.number,
        parentRotateAngle: PropTypes.number,
        borderRadius: PropTypes.object,
        zoomable: PropTypes.string,
        defaultProportionalZoomable: PropTypes.string,
        minWidth: PropTypes.number,
        minHeight: PropTypes.number,
        aspectRatio: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.bool
        ]),
        onRotateStart: PropTypes.func,
        onRotate: PropTypes.func,
        onRotateEnd: PropTypes.func,
        onResizeStart: PropTypes.func,
        onResize: PropTypes.func,
        onResizeEnd: PropTypes.func,
        onDragStart: PropTypes.func,
        onDrag: PropTypes.func,
        onDragEnd: PropTypes.func
    }

    static defaultProps = {
        parentRotateAngle: 0,
        rotateAngle: 0,
        rotatable: true,
        zoomable: '',
        defaultProportionalZoomable: '',
        minWidth: 10,
        minHeight: 10
    }

    handleRotate = (angle, startAngle) => {
        if (!this.props.onRotate) return
        let rotateAngle = Math.round(startAngle + angle)
        if (rotateAngle >= 360) {
            rotateAngle -= 360
        } else if (rotateAngle < 0) {
            rotateAngle += 360
        }
        if (rotateAngle > 356 || rotateAngle < 4) {
            rotateAngle = 0
        } else if (rotateAngle > 86 && rotateAngle < 94) {
            rotateAngle = 90
        } else if (rotateAngle > 176 && rotateAngle < 184) {
            rotateAngle = 180
        } else if (rotateAngle > 266 && rotateAngle < 274) {
            rotateAngle = 270
        }
        this.props.onRotate(rotateAngle)
    }

    handleResize = (length, alpha, rect, type, isShiftKey) => {
        if (!this.props.onResize) return
        const { rotateAngle, aspectRatio, minWidth, minHeight, parentRotateAngle, borderRadius } = this.props
        const beta = alpha - degToRadian(rotateAngle + parentRotateAngle)
        const deltaW = length * Math.cos(beta)
        const deltaH = length * Math.sin(beta)
        let radiousRatio = isShiftKey
        let ratio = isShiftKey && !aspectRatio ? rect.width / rect.height : aspectRatio
        const listOfProportional = this.props.defaultProportionalZoomable.split(",").map((item) => zoomableMap[item.trim()])
        if (this.props.defaultProportionalZoomable && listOfProportional.includes(type)) {
            ratio = !isShiftKey && !aspectRatio ? rect.width / rect.height : aspectRatio
            radiousRatio = !isShiftKey
        }
        const {
            position: { centerX, centerY },
            size: { width, height },
            radious
        } = getNewStyle(type, { ...rect, rotateAngle, radiousRatio }, deltaW, deltaH, ratio, minWidth, minHeight)
        this.props.onResize(centerToTL({ centerX, centerY, width, height, rotateAngle, borderRadius: radious }), isShiftKey, type)
    }

    handleDrag = (deltaX, deltaY) => {
        this.props.onDrag && this.props.onDrag(deltaX, deltaY)
    }

    render() {
        const {
            top, left, width, height, rotateAngle, parentRotateAngle, borderRadius, zoomable, rotatable,
            onRotate, onResizeStart, onResizeEnd, onRotateStart, onRotateEnd, onDragStart, onDragEnd
        } = this.props

        const styles = tLToCenter({ top, left, width, height, rotateAngle, borderRadius })

        return (
            <Rect
                styles={styles}
                zoomable={zoomable}
                rotatable={Boolean(rotatable && onRotate)}
                parentRotateAngle={parentRotateAngle}

                onResizeStart={onResizeStart}
                onResize={this.handleResize}
                onResizeEnd={onResizeEnd}

                onRotateStart={onRotateStart}
                onRotate={this.handleRotate}
                onRotateEnd={onRotateEnd}

                onDragStart={onDragStart}
                onDrag={this.handleDrag}
                onDragEnd={onDragEnd}
            />
        )
    }
}