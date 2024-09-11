import Link from 'next/link';
import { languages } from '@/app/data/languageData';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-6 text-blue-800">Chào mừng đến với Code Master!</h1>
        <h2 className="text-2xl font-semibold text-center mb-12 text-blue-600">Chọn một ngôn ngữ để bắt đầu:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {languages.map((language) => (
            <Link key={language.id} href={`/languages/${language.id}`} className="block transform hover:scale-105 transition-all duration-300">
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl border border-blue-200">
                <h3 className="text-2xl font-semibold mb-3 text-blue-700">{language.name}</h3>
                <p className="text-gray-600">{language.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
