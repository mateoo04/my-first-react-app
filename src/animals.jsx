export function List(props) {
  return (
    <>
      {!props.animals && <div>Loading...</div>}
      {props.animals && props.animals.length > 0 && (
        <ul>
          {props.animals.map((animal) => {
            return (
              animal.startsWith('L') && (
                <li key={animal} animal={animal}>
                  {animal}
                </li>
              )
            );
          })}
        </ul>
      )}
      {props.animals && props.animals.length === 0 && (
        <div>There are no animals in the list!</div>
      )}
    </>
  );
}
