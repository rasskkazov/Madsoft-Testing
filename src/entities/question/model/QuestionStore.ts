import { ANSWER_VALUE, TQuestion } from "./types";

const QUESTIONS = "questions";
class QuestionStore {
  constructor() {}

  setQuestions(questions: TQuestion[]) {
    localStorage.setItem(QUESTIONS, JSON.stringify(questions));
  }

  getQuestions(): TQuestion[] {
    return JSON.parse(localStorage.getItem(QUESTIONS));
  }

  private getQuestionById(id: number) {
    return this.getQuestions().find((question) => question.id === id);
  }

  updateQuestionAnswer(id: number, value: TQuestion["answerValue"]) {
    const questionToUpdate = this.getQuestionById(id);
    questionToUpdate[ANSWER_VALUE] = value;

    const updatedQuestions = this.getQuestions().map((question) => {
      if (question.id === questionToUpdate.id) return questionToUpdate;
      return question;
    });

    this.setQuestions(updatedQuestions);
  }
}

export const questionStore = new QuestionStore();
