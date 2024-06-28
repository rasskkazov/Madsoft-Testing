import { MultipleVars } from "../ui/MultipleVars";
import { SingleVar } from "../ui/SingleVar";
import { TextLong } from "../ui/TextLong";
import { TextShort } from "../ui/TextShort";

import { TQuestion } from "@/entities/question/model/types";

export function getAnswerFormElement(question: TQuestion) {
  switch (question.type) {
    case "VARIANT_SINGLE":
      return <SingleVar variants={question.variants} />;
    case "VARIANTS_MULTIPLE":
      return <MultipleVars variants={question.variants} />;
    case "TEXT_LONG":
      return <TextLong maxLength={question.maxLength} />;
    case "TEXT_SHORT":
      return <TextShort maxLength={question.maxLength} />;
  }
}
