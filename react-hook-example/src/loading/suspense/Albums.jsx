/* eslint-disable react/prop-types */
const Albums = ({data}) => {
  return (
    <ul>
        {data.map(item => (
            <li key={item.id}>{item.name}</li>
        ))}
    </ul>
  )
}

export default Albums