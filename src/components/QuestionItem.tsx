import React from 'react';
import { Question } from '../types';

interface QuestionItemProps {
  question: Question;
}

export const QuestionItem: React.FC<QuestionItemProps> = ({ question }) => {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2">{question.title}</h3>
      <p className="text-gray-600 mb-4 whitespace-pre-line">{question.question}</p>
      <div className="bg-gray-50 p-4 rounded">
        <pre className="text-sm">{question.answer}</pre>
      </div>
    </div>
  );
}; 