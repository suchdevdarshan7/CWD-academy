function App() {
  let obj = {
    type: "password",
    maxLength: 7,
    required: true,
  };

  return (
    <form>
      <input {...obj} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
