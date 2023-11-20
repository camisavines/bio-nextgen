export const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div>
        <h1>Camisa</h1>
        <input
          style={{ height: "25px", borderRadius: "25px", width: "35vw" }}
        ></input>
        <div>
          <button>Google Search</button>
          <button>Download Resume</button>
        </div>
      </div>
    </div>
  );
};
