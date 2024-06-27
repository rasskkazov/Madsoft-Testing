// import { TAnswer } from "@/entities";

// const ANSWERS = "answers";

// class AnsStorage {
//   constructor() {
//     if (!localStorage.getItem(ANSWERS)) {
//       localStorage.setItem(ANSWERS, JSON.stringify([]));
//     }
//   }

//   private setAnswers(answers: TAnswer[]) {
//     localStorage.setItem(ANSWERS, JSON.stringify(answers));
//   }

//   private getAnswers(): TAnswer[] {
//     return JSON.parse(localStorage.getItem(ANSWERS));
//   }

//   getAnsById(id: number) {
//     return this.getAnswers().find((ans) => ans.questionId === id);
//   }

//   addAns(newAns: TAnswer) {
//     let answers = this.getAnswers();
//     const clearIdAnswers = answers.filter(
//       (ansOld) => ansOld.questionId !== ansOld.questionId
//     );
//     this.setAnswers([...clearIdAnswers, newAns]);
//   }
// }

// export const ansStorage = new AnsStorage();
