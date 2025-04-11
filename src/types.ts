export interface Question {
  id: number;
  title: string;
  question: string;
  answer: string;
}

export interface QuestionState {
  currentQuestion: number;
  showAnswer: boolean;
  questions: Question[];
} 