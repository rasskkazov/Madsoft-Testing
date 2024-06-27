import { Question } from "@/entities";
import { SubmitQuestion, SingleVar } from "@/features";

export const Test = () => {
  return (
    <div className="test">
      <Question questionLine="wdfwf" submitBtn={<SubmitQuestion />}>
        <SingleVar variants={[]} />
      </Question>
    </div>
  );
};
