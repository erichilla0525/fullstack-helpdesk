import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface AnsProps{
  answer: string
}

const Ans = ({ answer }:AnsProps) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? <ChevronUp /> : <ChevronDown />}
      </button>
      {expanded && (
        <div className="border p-2 rounded">
          <div id="employee-list" className="mt-2">
            <p className="text-black-600">{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ans;
