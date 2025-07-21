import Image from "next/image";
import data from "@/app/data/data.json";
import { FaMapMarkerAlt, FaQuestionCircle, FaThumbsUp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen rounded-xl bg-blue-50 font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="relative h-96">
        <Image
          src="/images/sup-2.jpeg"
          alt="Аренда SUP-бордов в Сургуте"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-950/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Аренда SUP-бордов в Сургуте
            </h1>
            <p className="text-xl md:text-2xl">
              Качественные доски с полной экипировкой
            </p>
          </div>
        </div>
      </section>

      <article className="flex flex-wrap items-center container text-[22px] mx-auto px-4 py-8 text-blue-700 font-[family-name:var(--font-geist-mono)]">
         <Image
            src="/images/pasport.png"
            alt="Пасспорт"
            width={40}
            height={40}
            className="m-4"
            />
        <b className="p-4 text-gray-800">Паспорт &nbsp;</b>
        <p className="text-gray-600">
          Для составления договора проката нам будет нужен ваш паспорт
        </p>
      </article>
      <article className="flex flex-wrap items-center container text-[22px] mx-auto px-4 py-8 text-blue-700 font-[family-name:var(--font-geist-mono)]">
        <Image
            src="/images/money.png"
            alt="Залог"
            width={40}
            height={40}
            className="m-4"
            />
        <b className="p-4 text-gray-800">Залог &nbsp;</b>
        <p className="text-gray-600">
          Денежный залог: 10 000 рублей за доску
        </p>
      </article>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 ">
        {/* Услуги */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Наши услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-700">{service}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Преимущества */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex items-center text-gray-800"
              >
                <FaThumbsUp className="text-blue-500 text-2xl mt-1 mr-4" />
                <p className="text-lg">{advantage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Цены */}
        <section id="prices" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Прайс-лист
          </h2>
          <div className="bg-white rounded-lg shadow-md overflow-y-auto text-gray-700">
            <table className="w-full">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="p-4 text-left">Услуга</th>
                  <th className="p-4 text-left">Описание</th>
                  <th className="p-4 text-right">Цена</th>
                </tr>
              </thead>
              <tbody>
                {data.prices.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-blue-50" : "bg-white"}
                  >
                    <td className="p-4 font-medium">{item.service}</td>
                    <td className="p-4 text-gray-600">{item.description}</td>
                    <td className="p-4 text-right font-bold text-blue-700">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Локации */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Где нас найти
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            {data.locations.map((location, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <FaMapMarkerAlt className="text-red-500 text-2xl mr-3" />
                  <h3 className="text-xl font-semibold">{location.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{location.address}</p>
                <a
                  href={`https://yandex.ru/maps/?pt=${location.coordinates[1]},${location.coordinates[0]}&z=15`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Посмотреть на карте
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Частые вопросы
          </h2>
          <div className="space-y-4 text-gray-700">
            {data.faq.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-start">
                  <FaQuestionCircle className="text-blue-500 text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-medium">{item.question}</h3>
                    <p className="mt-2 text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}