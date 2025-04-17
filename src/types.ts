export type Question = {
  id: number;
  title: string;
  question: string;
  answer: string;
  topic: string;
};

export interface QuestionState {
  currentQuestion: number;
  showAnswer: boolean;
  questions: Question[];
} 