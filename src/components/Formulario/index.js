import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import Campo from '../Campo'

const Formulario = ({aoCadastrar, times, aoCriarTime}) => {
    
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');
    
    
    const aoSubmeter = (evento) => {
        evento.preventDefault()
        console.log('form enviado', nome, cargo, imagem, time )
        aoCadastrar({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="formulario-container">
            <form className='formulario' onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    itens={times}
                    label="Times"
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao texto='Criar card' />
            </form>
            <form className='formulario' onSubmit={(evento) => {
                evento.preventDefault()
                aoCriarTime({ nome: nomeTime, cor: corTime })
            }}>
                <Campo 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o nome do time"
                    valor={nome}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <Campo
                    type='color'
                    obrigatorio={true}
                    label="Cor"
                    placeholder="Digite a cor do time"
                    valor={cargo}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao texto='Criar um novo time' />
            </form>
        </section>
    )
}

export default Formulario