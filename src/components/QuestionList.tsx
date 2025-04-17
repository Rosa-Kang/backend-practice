import React, { useState } from 'react';
import { Question } from '../types';
import { questions } from '../data';
import { QuestionItem } from './QuestionItem';

export const QuestionList: React.FC = () => {
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set());

  // Group questions by topic
  const questionsByTopic = questions.reduce((acc, question) => {
    if (!acc[question.topic]) {
      acc[question.topic] = [];
    }
    acc[question.topic].push(question);
    return acc;
  }, {} as Record<string, Question[]>);

  const toggleTopic = (topic: string) => {
    setExpandedTopics(prev => {
      const newSet = new Set(prev);
      if (newSet.has(topic)) {
        newSet.delete(topic);
      } else {
        newSet.add(topic);
      }
      return newSet;
    });
  };

  return (
    <div className="space-y-4">
      {Object.entries(questionsByTopic).map(([topic, topicQuestions]) => (
        <div key={topic} className="border rounded-lg overflow-hidden">
          <button
            onClick={() => toggleTopic(topic)}
            className="w-full p-4 bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
          >
            <span className="font-semibold">{topic}</span>
            <span>{expandedTopics.has(topic) ? '▼' : '▶'}</span>
          </button>
          {expandedTopics.has(topic) && (
            <div className="p-4 space-y-4">
              {topicQuestions.map((question) => (
                <QuestionItem key={question.id} question={question} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}; 