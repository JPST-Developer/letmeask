import { useNavigate } from "react-router-dom"
import {  auth, firebase } from "../services/firebase"

import illustrationImg from "../assets/images/illustration.svg"
import logoImg from "../assets/images/logo.svg"
import googleIconImg from "../assets/images/google-icon.svg"

import { Button } from "../components/Button"

import "../styles/auth.scss"

export  function Home(){
  const navigate = useNavigate()

  function handleCreateRoom(){
    const provider = new firebase.auth.GoogleAuthProvider()

    auth.signInWithPopup(provider).then(result => {
      console.log(result)

      navigate("/rooms/new")

    })

  }

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
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do google" />
            Crie sua sala com o Google
          </button>
        </div>
        <div className="separator">Ou entre em uma salas</div>
        <form>
          <input type="text" placeholder="Digite o código da sala" />
          <Button type="submit">Entrar na sala</Button>
        </form>
        
      </main>
    </div>
  )
}