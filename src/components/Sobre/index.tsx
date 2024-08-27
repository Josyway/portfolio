import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre min</Titulo>
    <Paragrafo>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
      numquam quibusdam cupiditate quam qui distinctio eos vitae, non voluptate
      tempore atque molestias libero commodi accusamus velit optio expedita
      doloribus veniam.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=Josyway&show_icons=true&theme=dracula&include_all_commits=true&count" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Josyway&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
