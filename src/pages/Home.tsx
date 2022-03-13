import illustrationImg from "../assets/images/illustration.svg"
import logoImg from "../assets/images/logo.svg"
import googleIconImg from "../assets/images/google-icon.svg"

import "../styles/auth.scss"

export  function Home(){
  return(
    <div id="page-auth">
      <aside>
        <img className="image" src={illustrationImg} alt=""/>
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt=""  />
          <button>
            <img src={googleIconImg} alt="Logo do google" />
            Crie sua sala com o Google
          </button>
        </div>
        <div>
          Ou entre em uma salas
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <button type="submit">Entrar na sala</button>
          </form>
        </div>
      </main>
    </div>
  )
}