// /components/CodeEditor.tsx
import React, { useState, useEffect } from 'react';
import { javascript } from '@codemirror/lang-javascript';
import { cpp } from '@codemirror/lang-cpp';
import { python } from '@codemirror/lang-python';
import CodeMirror from '@uiw/react-codemirror';

interface CodeEditorProps {
  initialCode: string;
  onCodeChange: (value: string) => void;
  language: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialCode, onCodeChange, language }) => {
  const [code, setCode] = useState<string>(initialCode);

  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  const getLanguageExtension = () => {
    switch (language.toLowerCase()) {
      case 'c':
      case 'cpp':
        return cpp();
      case 'python':
        return python();
      case 'javascript':
      default:
        return javascript();
    }
  };

  return (
    <div className="overflow-hidden border border-gray-300 rounded-lg shadow-sm">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b border-gray-300">
        <span className="text-sm font-medium text-gray-700">Code Editor ({language.toUpperCase()})</span>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
      <CodeMirror
        value={code}
        height="200px"
        extensions={[getLanguageExtension()]}
        onChange={(value) => {
          setCode(value);
          onCodeChange(value);
        }}
        className="text-sm text-gray-700"
        theme="light"
      />
    </div>
  );
};

export default CodeEditor;
