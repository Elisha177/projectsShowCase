import './index.css'

const ProjectShowCase = props => {
  const {details} = props
  const {name, imageUrl} = details

  return (
    <li className="api-url">
      <img className="image" src={imageUrl} alt={name} />
      <p className="paragraph">{name}</p>
    </li>
  )
}

export default ProjectShowCase
