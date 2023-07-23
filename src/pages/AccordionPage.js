
import Accordion from "../components/Accordion"

export default function AccordionPage() {
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
