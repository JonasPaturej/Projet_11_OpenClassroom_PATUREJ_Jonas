import logements from "../data/logements.json"
import Card from "../components/Card"
import Banner from "../components/Banner"
import fond from "../assets/fond1.jpg"

export default function Home() {
  return (
    <>
      <Banner image={fond} title="Chez vous, partout et ailleurs"/>

    <section className="home">
      <div className="home_cardsWrapper">
        <div className="home_cardsGrid">
          {logements.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
