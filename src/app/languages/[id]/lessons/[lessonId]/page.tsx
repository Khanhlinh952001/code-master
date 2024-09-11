"use client"
import { languages } from '@/app/data/languageData';
import { cData, CppData, pythonData, javascriptData } from '@/app/data/Data';
import { notFound } from 'next/navigation';
import Theory from '@/components/Theory';
// import Practice from '@/components/Practice';
import Link from 'next/link';
import { useState } from 'react';
import { LessonData } from '@/types/LanguageData';
import CodeEditor from '@/components/CodeEditor';

export default function LessonPage({ params }: { params: { id: string; lessonId: string } }) {
  const language = languages.find(lang => lang.id === params.id);
  if (!language) {
    notFound();
  }

  let lessonData: LessonData[] = [];
  switch (language.id) {
    case 'c':
      lessonData = cData;
      break;
    case 'cpp':
      lessonData = CppData;
      break;
    case 'python':
      lessonData = pythonData;
      break;
    case 'javascript':
      lessonData = javascriptData;
      break;
    default:
      lessonData = [];
  }

  const lesson = lessonData.find(lesson => lesson.id === parseInt(params.lessonId));
  if (!lesson) {
    notFound();
  }
  console.log(pythonData)

  const [userCode, setUserCode] = useState<string>(lesson.initialCode);
  const [result, setResult] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);

  const handleRunCode = (code: string) => {
    let result = '';
    let isSuccess = false;

    switch (language.id) {
      case 'c':
      case 'cpp':
        // Đối với C và C++, chúng ta sẽ so sánh code với một giải pháp mẫu
        const sampleSolution = lesson.sampleSolution || '';
        if (code.replace(/\s/g, '') === sampleSolution.replace(/\s/g, '')) {
          result = 'Chính xác! Bạn đã hoàn thành bài học này.';
          isSuccess = true;
        } else {
          result = 'Kết quả chưa đúng. Hãy thử lại!';
        }
        break;
      case 'javascript':
      case 'python':
        // Giữ nguyên logic hiện tại cho JavaScript và Python
        try {
          const logs: string[] = [];
          const consoleLog = console.log;
          console.log = (...args) => {
            logs.push(args.join(' '));
          };

          eval(code);
          console.log = consoleLog;

          setConsoleOutput(logs);
          
          const lastOutput = logs.length > 0 ? logs[logs.length - 1] : undefined;
          
          if (lastOutput == lesson.expectedOutput) {
            result = 'Chính xác! Bạn đã hoàn thành bài học này.';
            isSuccess = true;
          } else {
            result = 'Kết quả chưa đúng. Hãy thử lại!';
          }
        } catch (error: any) {
          result = `Lỗi: ${error.message}`;
        }
        break;
      default:
        result = 'Ngôn ngữ không được hỗ trợ.';
    }

    setResult(result);
    setIsSuccess(isSuccess);
  };


  return (
    <div className='p-6 bg-gray-100 min-h-screen'>
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-800">{language.name}: {lesson.title}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-black">{lesson.title}</h2>
          <Theory content={lesson.theory} />
          {lesson.task && (
            <div className="mt-4 p-4 bg-blue-100 text-gray-700 border border-blue-300 rounded">
              <h3 className="font-bold">Yêu cầu:</h3>
              <p>{lesson.task}</p>
              <p>Kết quả mong muốn: {lesson.expectedOutput}</p>
            </div>
          )}
        </div>
        <div className="flex-1 p-6 bg-white rounded-lg shadow-md">
          <CodeEditor 
            initialCode={lesson.initialCode} 
            onCodeChange={setUserCode}
            language={language.id} // Truyền ngôn ngữ vào đây
          />
          <button
            onClick={() => handleRunCode(userCode)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Chạy Code
          </button>
          {consoleOutput.length > 0 && (
            <div className="mt-6 p-4 bg-gray-100 border border-gray-300 rounded">
              <h3 className="font-bold mb-2">Console Output:</h3>
              {consoleOutput.map((log, index) => (
                <pre key={index} className="whitespace-pre-wrap">{log}</pre>
              ))}
            </div>
          )}
          {result && (
            <div
              className={`mt-6 p-4 rounded-lg font-semibold ${
                isSuccess
                  ? 'bg-green-100 text-green-800 border-green-300'
                  : 'bg-red-100 text-red-800 border-red-300'
              } border`}
            >
              {result}
            </div>
          )}
        </div>
      </div>
      <div className="mt-6 w-full flex justify-center">
        <Link href={`/languages/${language.id}`} className="text-blue-500 hover:underline">
          Quay lại danh sách bài học
        </Link>
        <Link href={`/languages/${language.id}/lessons/${parseInt(params.lessonId) + 1}`} className="ml-4 text-blue-500 hover:underline">
          Bài tiếp theo
        </Link>
      </div>
    </div>
  );
}
