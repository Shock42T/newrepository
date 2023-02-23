import React from "react";
import Header from "./Header";
import Note from "./Note";

function App() {
  return (
    <div>
      <Header />
      <Note title="This is the title" content="This is the context" />
    </div>
  );
}

export default App;
