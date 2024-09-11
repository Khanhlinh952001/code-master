// /components/Theory.tsx
import React from 'react';

interface TheoryProps {
  content: string;
}

const Theory: React.FC<TheoryProps> = ({ content }) => {
  return (
    <div className="p-6 border-2 border-blue-200 rounded-xl bg-gradient-to-br from-blue-50 to-white shadow-md">
      <h3 className="text-xl font-bold mb-4 text-blue-800 border-b-2 border-blue-200 pb-2">Lý thuyết</h3>
      <p className="text-gray-700 leading-relaxed">{content}</p>
    </div>
  );
};

export default Theory;
