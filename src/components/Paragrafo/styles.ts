import styled from 'styled-components'
import { props } from '.'

export const P = styled.p<props>`
  font-size: 14px;
  line-height: 22px;
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
`
