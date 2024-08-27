import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  font-size: 10px;
  font-weight: bold;
  background-color: #282a35;
  color: #eee;
  padding: 8px;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background-color: #eee;
    color: #282a35;
  }
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
