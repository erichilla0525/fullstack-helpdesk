import FAQForm from "./FAQFrom";
import { useParams } from "react-router-dom";

const UpdateFaq = () => {
  const { id } = useParams();
  return (
    <>
      <div>UpdateFaq</div>
      <FAQForm mode={"edit"} id={id} />
    </>
  );
};

export default UpdateFaq;
