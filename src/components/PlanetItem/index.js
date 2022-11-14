import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <div className="planet-container">
      <img src={imageUrl} alt={`planet ${name}`} className="image" />
      <h1 className="heading-planet">{name}</h1>
      <p className="data">{description}</p>
    </div>
  )
}
export default PlanetItem
