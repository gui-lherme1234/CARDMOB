import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    try {
      const url = 'https://jsonplaceholder.typicode.com/albums/1/photos';
      const response = await fetch(url);
      if (response.status === 200) {
        const data = await response.json();
        const updatedData = data.map((photo) => ({
          ...photo,
          thumbnailUrl: `https://picsum.photos/300?random=${photo.id}`
        }));
        setPhotos(updatedData);
      }
    } catch (error) {
      console.error('Erro na busca', error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div>
      <h1>Meu álbum</h1>
      {photos.map((photo) => {
        return (
          <div key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>ID #{photo.id}</p>
            <h2>{photo.title}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;
