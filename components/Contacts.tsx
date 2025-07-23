"use client";

import Image from "next/image";
import data from "@/app/data/data.json";

interface Props {
  showPhone?: boolean,
  showTelegram?: boolean,
  className?: string,
}

export default function Contacts({
  showPhone = true,
  showTelegram = true,
  className
}: Props) {
  const { phone, telegram } = data.contacts;

  const handlePhoneClick = () => {
    console.log('Phone call initiated');
    // Метрика
  };

  const handleTelegramClick = () => {
    console.log('Telegram link clicked');
    // Метрика
  };

  return (
    <div className={`flex gap-4 items-center flex-col sm:flex-row, ${className}`}>
      {showPhone && (
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-gray-800 font-medium text-sm sm:text-base h-10 sm:h-12 px-5 sm:w-auto"
          href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
          onClick={handlePhoneClick}
        >
          <Image
            className="invert animate-pulse"
            src="/phone-call.svg"
            alt="Позвонить администратору"
            width={25}
            height={25}
          />
          <span className="hidden sm:block">{phone}</span>
        </a>
      )}

      {showTelegram && (
        <a
          className="rounded-full border border-solid transition-colors flex items-center justify-center bg-transparent hover:bg-white/10 font-medium text-sm sm:text-base h-10 sm:h-12 px-5 sm:w-auto"
          href={`https://t.me/${telegram}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleTelegramClick}
        >
          <Image
            className="mr-2"
            src="/telegram.svg"
            alt="Написать в Telegram"
            width={20}
            height={20}
          />
          <span className="hidden sm:block">Telegram</span>
        </a>
      )}
    </div>
  );
}