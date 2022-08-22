export const Input = ({ setCounter, counter }) => {
    return (
      <input
        onChange={(e) => setCounter(e.target.value)}
        type="number"
        step="1"
        min="0"
        value={counter}
      />
    );
  };
  