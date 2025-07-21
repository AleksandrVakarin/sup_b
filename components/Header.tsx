import Image from "next/image";
import Contacts from "./Contacts";
import H1 from "./h1";

interface Props {
  className?: string;
}

export default function Header({ className }: Props) {
  return (
    <header className={`flex items-center justify-between w-full border-b border-gray-500 p-4 ${className}`}>
        <b className="font-mono sm:text-2xl">Sup Rent</b>
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
            className="rounded-full border border-gray-300 bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center px-4 py-2 text-sm font-medium"
            href="#prices" // Якорь на секцию с ценами
            >
            <Image
                className="invert mr-2"
                src="/file.svg"
                alt="Цены"
                width={20}
                height={20}
            />
            Цены
            </a>
            <Contacts showTelegram={false} className="flex justify-end"/>
        </section>
    </header>
  );
}