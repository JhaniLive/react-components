import Button from "./Button";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div>
        <Button primary success>
          ABC
        </Button>
      </div>
      <div>
        <Button>Buy Now!</Button>
      </div>
      <div>
        <Button>Hide Adds</Button>
      </div>
      <div>
        <Button>Something!</Button>
      </div>
    </div>
  );
}
