import './Rodape.css'

const Rodape = () => {
    return(
        <footer>
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target='_blank'>
                            <img src="/imagens/fb.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target='_blank'>
                            <img src="/imagens/tw.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target='_blank'>
                            <img src="/imagens/ig.png" alt="" />
                        </a>
                    </li> 
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.png" alt="" />
            </section>
            <section>
                <p>Projeto Alura desenvolvido por <a href="https://www.camilamonteiro.me" target='_blank' rel="noreferrer">Camila Monteiro</a>.</p>
            </section>
        </footer>
    )
}
export default Rodape