import React from "react";
import { Mail, Phone } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-4">
      <header className="flex items-center justify-between py-6 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <img src="/favicon.ico" alt="Логотип" className="w-12 h-12" />
          <h1 className="text-2xl font-bold">ПромЭлектроСервис</h1>
        </div>
        <nav className="space-x-4">
          <button className="text-gray-700 hover:underline">О нас</button>
          <button className="text-gray-700 hover:underline">Услуги</button>
          <button className="text-gray-700 hover:underline">Контакты</button>
        </nav>
      </header>

      <main className="grid gap-8 mt-10 max-w-3xl mx-auto">
        <section>
          <h2 className="text-xl font-semibold mb-2">О компании</h2>
          <p>
            Наша компания специализируется на предоставлении профессиональных
            услуг в области промышленной электрики: монтаж и ремонт
            электрооборудования. Гарантируем качество, надежность и соблюдение
            всех стандартов безопасности.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Наши услуги</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Монтаж промышленного электрооборудования</li>
            <li>Диагностика и ремонт электрических систем</li>
            <li>Плановое техническое обслуживание</li>
            <li>Модернизация и автоматизация процессов</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Обратная связь</h2>
          <form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Ваше имя"
              className="w-full border border-gray-300 rounded p-2"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Ваш email"
              className="w-full border border-gray-300 rounded p-2"
              required
            />
            <textarea
              name="message"
              placeholder="Сообщение"
              className="w-full border border-gray-300 rounded p-2"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded"
            >
              Отправить
            </button>
          </form>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Контакты</h2>
          <p className="flex items-center space-x-2">
            <Mail className="w-4 h-4" /> <span>email@example.com</span>
          </p>
          <p className="flex items-center space-x-2">
            <Phone className="w-4 h-4" /> <span>+7 (000) 000-00-00</span>
          </p>
        </section>
      </main>

      <footer className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ПромЭлектроСервис. Все права защищены.
      </footer>
    </div>
  );
}
