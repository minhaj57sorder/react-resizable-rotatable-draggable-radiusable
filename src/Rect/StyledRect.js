import styled from 'styled-components'

export default styled.div`
  position: absolute;
  border: 1px solid #598DFA;
  .square {
    position: absolute;
    width: 7px;
    height: 7px;
    background: white;
    border: 1px solid #598DFA;
    border-radius: 1px;
  }

  .resizable-handler {
    position: absolute;
    width: 12px;
    height: 12px;
    cursor: pointer;
    z-index: 1;
    background:transparent;

    &.tl,
    &.tr {
      top: -4.5px;
    }
    
    &.t{
      top: -4.5px;
    }

    &.tl,
    &.l,
    &.bl {
      left: -4.5px;
    }

    &.bl,
    &.b,
    &.br {
      bottom: -4.5px;
    }

    &.br,
    &.r,
    &.tr {
      right: -4.5px;
    }

    &.l,
    &.r {
      margin-top: -4.5px;
    }

    &.t,
    &.b {
      margin-left: -4.5px;
    }
    // modified
    &.t {
        top:-1px;
        margin-left: -2px;
    }
    &.b {
        bottom:-1px;
        margin-left: -2px;
    }
    &.l {
        margin-top:-2px;
        left: -1px;
    }
    &.r {
        margin-top:-2px;
        right: -1px;
    }
  }

  .rotate {
    position: absolute;
    width: 12px;
    height: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .rotatetl {
    left: -14px;
    top: -14px;
    // opacity:0;
    // &:hover{
    //     opacity:1;
    // }
  }
  .rotatetr {
    right: -14px;
    top: -14px;
    // opacity:0;
    // &:hover{
    //     opacity:1;
    // }
  }
  .rotatebl {
    left: -14px;
    bottom: -14px;
    // opacity:0;
    // &:hover{
    //     opacity:1;
    // }
  }
  .rotatebr {
    right: -14px;
    bottom: -14px;
    // opacity:0;
    // &:hover{
    //     opacity:1;
    // }
  }

  .t,
  .tl,
  .tr {
    top: -3px;
  }

  .b,
  .bl,
  .br {
    bottom: -3px;
  }

  .r,
  .tr,
  .br {
    right: -3px;
  }

  .tl,
  .l,
  .bl {
    left: -3px;
  }

  .l,
  .r {
    top: 50%;
    margin-top: -3px;
  }

  .t,
  .b {
    left: 50%;
    margin-left: -3px;
  }

// modified
  .t {
    width: calc(100% - 10px);
    height: 1px;
    left: 7px;
    top: -2px;
    border-color: transparent;
    background:transparent;
  }
  .b {
    width: calc(100% - 10px);
    height: 1px;
    left: 7px;
    bottom: -2px;
    border-color: transparent;
    background:transparent;
  }
  .l {
    height: calc(100% - 10px);
    width: 1px;
    left: -2px;
    top: 7px;
    border-color: transparent;
    background:transparent;
  }
  .r {
    height: calc(100% - 10px);
    width: 1px;
    right: -2px;
    top: 7px;
    border-color: transparent;
    background:transparent;
  }
 
  .rtr {
    top: ${props => Number(props.style.borderRadius.split("px")[1].trim())/2+7}px;
    right: ${props => Number(props.style.borderRadius.split("px")[1].trim())/2+7}px;
    border-radius: 50%;
  }
  .rtl {
    top: ${props => Number(props.style.borderRadius.split("px")[0].trim())/2+7}px;
    left: ${props => Number(props.style.borderRadius.split("px")[0].trim())/2+7}px;
    border-radius: 50%;
  }
  .rbr {
    bottom: ${props => Number(props.style.borderRadius.split("px")[2].trim())/2+7}px;
    right: ${props => Number(props.style.borderRadius.split("px")[2].trim())/2+7}px;
    border-radius: 50%;
  }
  .rbl {
    bottom: ${props => Number(props.style.borderRadius.split("px")[3].trim())/2+7}px;
    left: ${props => Number(props.style.borderRadius.split("px")[3].trim())/2+7}px;
    border-radius: 50%;
  }
`