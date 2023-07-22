import Button from "./Button";
import { AiOutlineHeart } from "react-icons/ai";
import "./styles.css";
// jhani
export default function App() {

  const handleClick = () => {
    alert('Clicked')
  }


  return (
    <div className="App">
      <div>
        <Button onClick={handleClick} className="mb-5" primary rounded outline>
          ABCasda
        </Button>
      </div>
      <div>
        <Button secondary>Buy Now!</Button>
      </div>
      <div>
        <Button success>Hide Adds</Button>
      </div>
      <div>
        <Button warning>Something!</Button>
      </div>
      <div>
        <Button danger rounded outline><AiOutlineHeart className="mr-4"/> Something!</Button>
      </div>
    </div>
  );
}
