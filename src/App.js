import Button from "./components/Button";
import { AiOutlineHeart } from "react-icons/ai";
import "./styles.css";
import Accordion from "./components/Accordion";
// jhani
export default function App() {
  const items = [
    {
      id: 1,
      label: "Heading 1",
      content: "lorem ipsum one",
    },
    {
      id: 2,
      label: "Heading 2",
      content: "lorem ipsum two",
    },
    {
      id: 3,
      label: "Heading 3",
      content: "lorem ipsum three",
    },
  ];

  return <Accordion items={items} />;
}
