import React, { type FC } from 'react'
import styled from 'styled-components';
import type IComponentProps from '../interfaces/IComponentProps'

import iconMinimize from '../content/assets/icon_header_minimize.svg';
import iconMaximize from '../content/assets/icon_header_maximize.svg';
import iconClose from '../content/assets/icon_header_close.svg';
import iconMinimizeDisable from '../content/assets/icon_header_minimize_disable.svg';
import iconMaximizeDisable from '../content/assets/icon_header_maximize_disable.svg';
import iconCloseDisable from '../content/assets/icon_header_close_disable.svg';
import Button from './Button';

const TitleFrame = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:flex-start;
  width:100%;
  height: 18px;
  background: linear-gradient(270deg, #1085D2 0%, #00007B 100%);
  padding-left:4px;
  .title {
    flex:1;
    font-family: MS Sans Serif;
    font-size: 11px;
    line-height: 12px;
    color: #FFFFFF;
  }
  .btn-close {
    margin-left:2px;
  }
  .frame-actions {
    display:flex;
    flex-direction:row;
    align-items:center;
    height:100%;
    padding: 2px;
  }
  .frame-actions > button {
    width:16px;
    height:14px;
    position:relative;
  }
  .btn-minimize img {
    position: absolute;
    width: 6px;
    height: 2px;
    left: 4px;
    top: 9px;
  }
  .btn-maximize img {
    position: absolute;
    width: 9px;
    height: 9px;
    left: 3px;
    top: 2px;
  }
  .btn-close img {
    position: absolute;
    width: 8px;
    height: 7px;
    left: 4px;
    top: 3px;
  }
`;

interface ITitleBarProps extends IComponentProps {
  title?: string;
  disableMinimize?:boolean;
  disableMaximize?:boolean;
  disableClose?:boolean
}

const TitleBar:FC<ITitleBarProps> = ({title, disableMinimize = true, disableMaximize = true, disableClose = true}) => {
  return (
    <TitleFrame>
      <div className='title'>
        {title}
      </div>
      <div className='frame-actions'>
        <Button className='btn-minimize' disabled={disableMinimize}>
          { disableMinimize ? <img src={iconMinimizeDisable} /> : <img src={iconMinimize} /> }
        </Button>
        <Button className='btn-maximize' disabled={disableMaximize}>
          { disableMaximize ? <img src={iconMaximizeDisable} /> : <img src={iconMaximize} /> }
        </Button>
        <Button className='btn-close' disabled={disableClose}>
          { disableClose ? <img src={iconCloseDisable} /> : <img src={iconClose} /> }
        </Button>
      </div>
    </TitleFrame>
  );
};

export default TitleBar;