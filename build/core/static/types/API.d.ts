export declare class API {
    getUser(): void;
    post(url: string, data: any, onSuccess: () => void, onFail: () => void): void;
    get(url: string, onResponse: (data: any) => void): void;
}
