function App() {
  const bands = [
    {
      name: "Band of Cats",
      description: "A band with little cats playing instruments.",
      url: "https://spotify.com/band-of-cats",
      uuid: "jkhafbofaofnoai",
    },
  ];
  return (
    <>
      <header>
        <h1>Music tips!</h1>
      </header>
      <main>
        <section>
          <h2>Post a band!</h2>
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Description" />
            <input type="text" placeholder="Spotify url" />
            <button>Submit</button>
          </form>
        </section>
        <section>
          <h2>Recommended music</h2>
          <ul>
            {bands.map((band) => {
              console.log(band);
              return (
                <li id={band.uuid}>
                  <h3>
                    <a href={band.url}>{band.name}</a>
                  </h3>
                  <p>{band.description}</p>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
