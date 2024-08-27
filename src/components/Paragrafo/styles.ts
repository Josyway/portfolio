import styled from 'styled-components'
import { props } from '.'

export const P = styled.p<props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  line-height: 22px;
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
`
