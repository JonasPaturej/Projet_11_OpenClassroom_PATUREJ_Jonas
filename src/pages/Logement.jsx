import { useParams, Navigate } from "react-router-dom"
import logements from "../data/logements.json"
import Collapse from "../components/Collapse"
import Gallery from "../components/Gallery"
import Rate from "../components/Rate"


export default function Logement() {
  const { id } = useParams()
  const logement = logements.find((item) => item.id === id)

  if (!logement) return <Navigate to="/NotFound" replace/>

  return (
    <section className="logement">
      <Gallery pictures={logement.pictures} title={logement.title}/>

      <div className="logement_top">
        <div className="logement_left">
          <h1 className="logement_title">{logement.title}</h1>
          <p className="logement_location">{logement.location}</p>

          <div className="logement_tags">
            {logement.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="logement_right">
          <div className="host">
            <p className="host_name">{logement.host.name}</p>
            <img className="host_img" src={logement.host.picture} alt={logement.host.name}/>
          </div>
          <Rate value={Number(logement.rating)}/>
        </div>    
      </div>

      <div className="logement_collapses">
        <Collapse title="Description">{logement.description}</Collapse>
        <Collapse title="Équipements">
          <ul className="equipments">
            {logement.equipments.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </section>
  )
}
