import type { FAQItem } from "./Faq";
import FAQForm from "./FAQFrom";
import { useParams } from "react-router-dom";
interface FAQProps {
  faqData: FAQItem[];
  setFaqData: React.Dispatch<React.SetStateAction<FAQItem[]>>;
}

const UpdateFaq: React.FC<FAQProps> = ({ faqData, setFaqData }) => {
  const { id } = useParams();
  const idNumber = id ? Number(id) : undefined;
  return (
    <>
      <div>UpdateFaq</div>
      <FAQForm
        faqData={faqData}
        setFaqData={setFaqData}
        mode={"edit"}
        id={idNumber}
      />
    </>
  );
};

export default UpdateFaq;
