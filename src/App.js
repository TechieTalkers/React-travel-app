
import './App.css';
import NavBar from "./component/Navbar"
import Card from "./component/Card"
import data from "./component/data"

function App() {
  const cardData=data.map(item=>
    <Card key={item.id}
          {...item} />

  )
  return (
    <div className="App">
      <NavBar />
      <section className="card-list">
        {cardData}
        </section>
    </div>
  );
}

export default App;
