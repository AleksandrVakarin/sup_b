// если нужны типы то можно переименовать data.json в data.ts и использовать типизацию
export interface DataTypes {
    contacts: {
        phone: string,
        telegram: string,
    }
    services: string[],
    garantee: string,
    prices: {
        service: string,
        price: string,
    }[]
}