import { languages } from '@/app/data/languageData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cData, CppData, pythonData, javascriptData } from '@/app/data/Data';
import { LessonData } from '@/types/LanguageData';

export default function LanguagePage({ params }: { params: { id: string } }) {
  const language = languages.find(lang => lang.id === params.id);

  if (!language) {
    notFound();
  }

  // Chọn dữ liệu bài học dựa trên ngôn ngữ
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
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-800">{language.name}</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-gray-700 mb-4">{language.description}</p>
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Bắt đầu học {language.name}</h2>
          <p className="text-gray-600 mb-6">
            Chọn một cấp độ để bắt đầu học {language.name}. Chúng tôi sẽ hướng dẫn bạn từ cơ bản đến nâng cao.
          </p>
          
          {/* Danh sách các bài học */}
          <ul className="space-y-4">
            {lessonData.map((lesson) => (
              <li key={lesson.id} className="border-b pb-4 bg-slate-100 p-4 rounded-xl">
                <Link href={`/languages/${language.id}/lessons/${lesson.id}`}>
                  <div className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition duration-300">
                    {lesson.title}
                  </div>
                </Link>
                <p className="text-gray-600 mt-2">{lesson.theory.substring(0, 100)}...</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
