import styled, { css } from 'styled-components';

interface TooltipContentProps {
  direction: string;
}
export const TooltipContainer = styled.div`
  display: inline-block;
  position: relative;
`

export const TooltipContent = styled.div<TooltipContentProps>`
  position: absolute;
  border-radius: 4px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px;
  color: #fff;
  background: #000;
  font-size: 14px;
  font-family: sans-serif;
  line-height: 1;
  z-index: 100;
  white-space: nowrap;

  &:before{
    content: '';
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-width: 6px;
    margin-left: calc(6px * -1);
  }

  ${props => {
    if(props.direction === 'top'){
      return css`
        top: calc(20px * -1);
        &:before {
          top: 100%;
          border-top-color: #000;
        }
      `
    }
    if(props.direction === 'bottom'){
      return css`
        bottom: calc(20px * -1);
        &:before {
          bottom: 100%;
          border-bottom-color: #000;
        }
      `
    }
    if(props.direction === 'left'){
      return css`
        left: auto;
        right: calc(100% + 20px);
        top: 50%;
        transform: translateX(0) translateY(-50%);
        &:before {
          left: auto;
          right: calc(6px * -2);
          top: 50%;
          transform: translateX(0) translateY(-50%);
          border-left-color: #000;
        }
      `
    }
    if(props.direction === 'right'){
      return css`
        left: calc(100% + 20px);
        top: 50%;
        transform: translateX(0) translateY(-50%);
        &:before {
          left: calc(6px * -1);
          top: 50%;
          transform: translateX(0) translateY(-50%);
          border-right-color: #000;
        }
      `
    }
  }}
`