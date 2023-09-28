import heroPages from '../assets/BG.jpg';
import '../CSS/Home.css'
function home() {
  return (
    <div>
        <section className="container">
      <div className="heroPage">
        <img src={heroPages} alt="Heropahina" className="Hero"/>
      </div>
      <h1 className="mainTitle">NEXUS</h1>
      <h5 className="mainSentence">Gaming beyond Boundaries</h5>
      <a className="mainSentence btnLinks" href="#listGames">Play Now!</a>
    </section>
    </div>
  )
}

export default home
