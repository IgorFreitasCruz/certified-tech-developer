import "./style/global.scss";
import { Header } from "./components/Header";

export function App() {
  return (
    <div>
      <Header />

      <section id="banner-container"></section>

      <section id="cards-container">
        <h2>Curiosidades</h2>
        <div className="card">
          <img src="https://picsum.photos/300/300" alt=""></img>
          <p>Paranapiacaba</p>
        </div>
        <div className="card">
          <img src="https://picsum.photos/300/300" alt=""></img>
          <p>Time de futebol e estadio Anacleto Campanela</p>
        </div>
        <div className="card">
          <img src="https://picsum.photos/300/300" alt=""></img>
          <p>Visite e ganhe uma multa</p>
        </div>
      </section>

      <section id="video-container">
        <h2>Video</h2>
        <div className="container-video">
          <iframe
            src="https://www.youtube.com/embed/iroxK5g5WEM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <footer></footer>
    </div>
  );
}
