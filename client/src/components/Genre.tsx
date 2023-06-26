import useGenre from "../hooks/useGenre";

const Genre = () => {
  const { genre } = useGenre();
  return (
    <ul>
      {genre.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  );
};

export default Genre;
