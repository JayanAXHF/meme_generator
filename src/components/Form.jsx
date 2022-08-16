import "./styles/Form.css";
import dataFile from "../data/data.js";

const Form = () => {
  let storage = [];
  let images;

  const handleClick = (x) => {
    x.preventDefault();
    storage = dataFile.data.memes;
    const randNum = Math.floor(Math.random() * storage.length);
    images = storage[randNum].url;
    console.log(
      "LOG ~ file: Form.jsx ~ line 13 ~ handleClick ~ images",
      images
    );
  };

  // eslint-disable-next-line

  return (
    <div id="container">
      <form action="" onSubmit={handleClick}>
        <div>
          <input type="text" placeholder="Top Text" className="h-9 w-56" />
          <input type="text" placeholder="Bottom Text" className="h-9 w-56" />
          <br />
          <input
            className="h-9 bg-black text-white rounded-full"
            type="submit"
            id="submit"
            value="Get Meme Image"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
