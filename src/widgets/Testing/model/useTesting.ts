// import { ansStore } from "@/entities";
// import { TQuestion } from "@/entities/question/model/types";

// import { useEffect, useState } from "react";

// export const useTesting = (questions: TQuestion[]) => {
//   const [completedQuestions, setCompletedQuestions] = useState(null);

//   useEffect(() => {
//     const handleStorageChange = (event: StorageEvent) => {
//       console.log("alo");
//     };

//     window.addEventListener("storage", handleStorageChange);
//     return () => window.removeEventListener("storage", handleStorageChange);
//   }, []);

//   const uncompletedQuestions = questions.filter((question) => {
//     return !ansStore
//       .getAnswers()
//       .some((completeQuestion) => completeQuestion.id === question.id);
//   });

//   const curQuestion = uncompletedQuestions[0];

//   return { curQuestion };
// };
