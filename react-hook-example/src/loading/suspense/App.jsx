import { useEffect, useState } from "react";
import ArtistPage from "./ArtistPage";

const App = () => {
  const [isShowContent, setIsShowContent] = useState(false);
  const [data, setData] = useState([]);
  const handleShowSuspense = () => {
    setIsShowContent(!isShowContent);
  };

  useEffect(() => {
    const callAPI = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Something error!");
        }
        const dataJson = await response.json();
        setData(dataJson);
      } catch (error) {
        return Error("Error when fetching data!");
      }
    };
    callAPI();
  }, []);

  return (
    <div>
      <button onClick={handleShowSuspense}>Click here</button>
      {isShowContent && <ArtistPage nameArtist="The Ultraman" data={data} />}
    </div>
  );
};

export default App;
