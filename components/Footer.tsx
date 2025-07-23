import Contacts from "./Contacts";
import data from "@/app/data/data.json";

export default function Footer() {
    return (
        <footer className="text-center p-4">
          <h2 className="text-3xl font-bold mb-8">
            Как с нами связаться
          </h2>
          <Contacts className="justify-center"/>
          <div className="mt-6 flex justify-center space-x-6">
            <a
              href={data.social_media.vk}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-900"
            >
              <span className="text-xl font-bold mb-8">VK</span>
              {/* <Image
                src="/icons/vk.svg"
                alt="VK"
                width={32}
                height={32}
              /> */}
            </a>
            <a
              href={data.social_media.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-900"
            >
              <span className="text-xl font-bold mb-8">Instagram</span>
              {/* <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={32}
                height={32}
              /> */}
            </a>
          </div>
        </footer>
    )
}