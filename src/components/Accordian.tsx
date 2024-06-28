export interface AccordianProps {
  items: {
    title: string;
    content: string;
  }[];
}

function AccordianItem(props: AccordianProps["items"][number]) {
  return (
    <div className="mt-4 space-y-4">
      <details className="p-4 border border-gray-300 rounded-md">
        <summary className="text-2xl font-bold cursor-pointer custom-summary">
          {props.title}
        </summary>
        <p className="mt-2 text-base leading-relaxed text-gray-600">
          {props.content}
        </p>
      </details>
    </div>
  );
}

export default function Accordian(props: AccordianProps) {
  return (
    <div id="accordian-container">
      {props.items.map((item, index) => (
        <AccordianItem key={index} {...item} />
      ))}
    </div>
  );
}
