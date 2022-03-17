import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const fetchUrl = "https://learnx-default.herokuapp.com/api/games/" + id;
        const response = await fetch(fetchUrl);

        if (response.ok) {
          const json = await response.json();
          setGame(json.data.attributes);
          console.log(game);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return <div className="details-page"></div>;
}
export default Details;
