import { TAnswer } from "./types";

const ANSWERS = "answers";

type TQuestionStatus = { questionId: number; completed: boolean };
class AnsStorage {
  constructor() {
    if (!localStorage.getItem(ANSWERS)) {
      localStorage.setItem(ANSWERS, JSON.stringify([]));
    }
  }

  private setAnswers(answers: TAnswer[]) {
    localStorage.setItem(ANSWERS, JSON.stringify(answers));
  }

  private getAnswers(): TAnswer[] {
    return JSON.parse(localStorage.getItem(ANSWERS));
  }

  getAnsById(id: number) {
    return this.getAnswers().find((ans) => ans.id === id);
  }

  addAns(newAns: TAnswer) {
    let answers = this.getAnswers();
    this.setAnswers([...answers, newAns]);
  }
}

export const ansStorage = new AnsStorage();
