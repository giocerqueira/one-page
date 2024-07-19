import React from 'react'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import * as S from './components/style.jsx'
import Image from './components/images/picture-copia.png'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function Main() {
  return (
    <S.Body>
      <header>
        <h1>Olá! Me chamo Giovanna Victoria de Oliveira Cerqueira e hoje vim contar de uma das experiências mais transformadoras e que considero que mais agregou na minha vida profissional e, principalmente, na vida pessoal.</h1>
      </header>
      <S.Main>
        <S.DivParagrafo>
          <h2>Recentemente, em Junho de 2024, finalizei a minha formação em Desenvolvimento Front-End com Introdução de Nuvem AWS. Esta foi uma formação online e gratuita, que abrangia mulheres de baixa renda de várias partes do mundo. Após a conclusão da formação, os realizadores (Vai na Web e Instituto Precisa Ser) e patrocinadores (AWS, Hospital Sírio-Libanês, CBMM, IT Lean e Daiichi Sankyo) nos desafiaram com o Hackathon Talentos Digitais 2024: uma competição de programação entre as formandas. Nessa competição, utilizamos dos nossos conhecimentos técnicos adquiridos durante a formação, além de também termos precisado provar nossas habilidades interpessoais e de trabalho em equipe, já que fomos divididas em 10 grupos de 5 pessoas e competimos em grupo.</h2>
          <S.P>Como a formação já tinha um viés social (pois atendia somente mulheres de baixa renda), eu lidei com diversas pessoas, de realidades diferentes da minha, durante toda essa caminhada. Na formação, conheci mulheres que já são mães, donas de casa, que não deixaram seus sonhos morrerem e estão em busca de recolocação e transição de carreira. Porém, além disso, no hackathon eu tive a oportunidade de conhecer o Giovanni: o Giovanni é uma pessoa não-binária, que tem os pronomes ele/dele, e que foi um dos meus parceiros nessa competição.</S.P>
          <S.P2>O objetivo da competição era desenvolver um Portal do Paciente, lá ele deveria conseguir: se cadastrar; conferir seus dados pessoais e alterar, se necessário; agendar, reagendar e cancelar consultas; ver histórico de consultas canceladas e agendadas. Ao longo do desenvolvimento, o Giovanni trouxe vários insights valiosos, que me fizeram refletir sobre a importância da inclusão de pessoas não-binárias para coisas que, nós que somos cis nem imaginamos, como na hora de desenvolver um site. Isso porque é importante que a experiência do usuário seja positiva e, para isso, o site deve se comunicar com todos e todes. Digo isso porque eu fui responsável por desenvolver a página de cadastro do paciente e o tempo todo estive em contato com o Giovanni para deixar o formulário de cadastro da maneira mais inclusiva possível, pois tínhamos como foco manter o projeto acessível. Esse olhar dele foi muito importante para o desenvolvimento do projeto e o respeito mútuo também contribuiu muito para que o projeto tenha sido o sucesso que foi, pois, com ele, vencemos a competição.</S.P2>
          <S.P3>Logo, finalizo dizendo que, além da parte técnica e do contato com novas tecnologias, oportunidade de aprendizado e de crescimento, a Globo também tem muito a me agregar não só em hard skills, mas também em soft skills, me dando a oportunidade de conviver com pessoas de outras realidades além da minha e de aprender com a diferença. Além disso, acredito que eu também possa contribuir para a empresa, trazendo meus insights da minha realidade e estando sempre aberta para ouvir e aprender, assim como fiz durante a competição, para que juntos possamos fazer projetos completos, inclusivos e que tenham reconhecimento dentro da empresa.</S.P3>
          <div>
            <button id='Github'><a target="_blank" href="https://github.com/giocerqueira">Acesse aqui o meu Github!</a></button>
            <button id='Repositorio'><a target="_blank" href="https://github.com/giocerqueira/one-page">Confira aqui o repositório desta página!</a></button>
          </div>
        </S.DivParagrafo>
        <S.DivImg>
          <img src={Image} alt="" />
        </S.DivImg>
      </S.Main>
    </S.Body>
  )
}

export default Main