import Contacts from "./Contacts";
import RubleIcon from "./RubleIcon";

interface Props {
  className?: string;
}

export default function Header({ className }: Props) {
  return (
    <header className={`flex items-center justify-between w-full border-b border-gray-500 p-4 ${className}`}>
        <b className="font-mono sm:text-2xl text-blue-600">Sup Rent</b>
        <section className="grid grid-cols-2 gap-4">
            <a
            className="rounded-full border border-gray-300 dark:text-blue-600 hover:bg-white/20 transition-colors flex items-center justify-center px-4 py-2 text-md font-bold"
            href="#prices" // Якорь на секцию с ценами
            >
            <RubleIcon className="mr-2 w-6 h-6 text-black dark:text-blue-600" />
            <span className="hidden sm:block">Цены</span>
            </a>
            <Contacts showTelegram={false} className="flex justify-end"/>
        </section>
    </header>
  );
}