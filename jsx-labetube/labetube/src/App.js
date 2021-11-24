import logo from './logo.svg';
import "./App.js";
import "./App.css";
import CardVideo from "./components/CardVideo";
import BotaoMenu from "./components/BotaoMenu";
export default App;

function App() {
  const titulo = "Titulo do vídeo";

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }

    return (
      <div className="tela-inteira">
            <header>
            <h1>LabeTube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca" />
            </header>

            <main>
            <nav className="menu-vertical">
                <ul>
                <botoes-meunu-vertical texto={"Início"} />
	              <botoes-meunu-vertical texto={"Em alta"} />
	              <botoes-meunu-vertical texto={"Inscrições"} />
	              <hr/>
	              <botoes-meunu-vertical texto={"Originais"} />
	              <botoes-meunu-vertical texto={"Histórico"} />
                </ul>
            </nav>

            <section className="painel-de-videos">

	      <CardVideo 
	      link={"https://picsum.photos/400/400?a=1"}
	      titulo={"Vídeo 1"}
	      reproduzVideo={reproduzVideo} 
	      />
      
	      <CardVideo
	      link={"https://picsum.photos/400/400?a=2"}
	      titulo={"Vídeo 2"}
	      reproduzVideo={reproduzVideo}
	      />
	      <CardVideo	
	      link={"https://picsum.photos/400/400?a=3"}
	      titulo={"Vídeo 3"}
	      reproduzVideo={reproduzVideo}
	      />
	      <CardVideo
	      link={"https://picsum.photos/400/400?a=4"}
	      titulo={"Vídeo 4"}
	      reproduzVideo={reproduzVideo}
	      />
	      <CardVideo
	      link={"https://picsum.photos/400/400?a=5"}
	      titulo={"Vídeo 5"}
	      reproduzVideo={reproduzVideo}
	      />
	      <CardVideo
	      link={"https://picsum.photos/400/400?a=6"}
	      titulo={"Vídeo 6"}
	      reproduzVideo={reproduzVideo}
	      />
	      <CardVideo
	      link={"https://picsum.photos/400/400?a=7 "}
      	titulo={"Vídeo 7"}
	      reproduzVideo={reproduzVideo}
	      />
	      <CardVideo
	      link={"https://picsum.photos/400/400?a=8"}
      	titulo={"Vídeo 8"}
	      reproduzVideo={reproduzVideo}
	      />
            </section>
        </main>

        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
    </div>
    );
  };
  