import { useState } from "react";
// import { FaQuoteRight } from "react-icons/fa";
// import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import data from "./components/data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  function submitHandler(e) {
    e.preventDefault();
    console.log("hello jii...");
    let amount = parseInt(count);
    if(count <= 0){
      amount = 1
    }
    if(count > 8){
      amount = 8
    }


    setText(data.slice(0, amount));
  }

  return (
    <section className="section-center">
      <h3>Tired of Boring lorem ipsum ? </h3>
      <form className="lorem-form" onSubmit={submitHandler}>
        <label htmlFor="amount">paragraph :</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />

        <button type="submit" className="btn">
          generate
        </button>
      </form>

      <article className="lorem-text">

        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}

      </article>
    </section>
  );
}

export default App;
