/* eslint-disable react/prop-types */
const getImageUrl = (imageId, size = "s") => {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}

const Profile = ({ imageId, name, profession, awards, discovery, imageSize = 70 }) => {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img className="avatar" src={getImageUrl(imageId)} alt={name} width={imageSize} height={imageSize} />
      <ul>
        <li>
          <b>Profession:</b> {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>({awards.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

const App = () => {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        imageId="szV5sdG"
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={["Nobel Prize in Physics", "Nobel Prize in Chemistry", "Davy Medal", "Matteucci Medal"]}
      />
      <Profile
        imageId="YfeOqp2"
        name="Katsuko Saruhashi"
        profession="geochemist"
        discovery="a method for measuring carbon dioxide in seawater"
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
      />
    </div>
  );
}

export default App;
