import {Injectable, PLATFORM_ID, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {isPlatformBrowser} from '@angular/common';
import {map} from "rxjs";

// Extend Window interface to include Telegram property
interface CustomWindow extends Window {
    Telegram: any; // You can replace 'any' with a more specific type if available
}

declare const window: CustomWindow; // Declare window with the extended interface

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    http: HttpClient;

    constructor(
        @Inject(HttpClient) private httpClient: HttpClient,
        @Inject(PLATFORM_ID) private platformId: any
    ) {
        this.http = httpClient;
    }

    telegramData() {
        if (isPlatformBrowser(this.platformId)) {
            return window?.Telegram?.WebApp?.initDataUnsafe;
        } else return null; // or handle non-browser environment accordingly
    };

    getData() {
        const url = 'api/helloworld';
        return this.http.get<any>(url);
    };

    getTelegramUser() {
        const hash = isPlatformBrowser(this.platformId) && window?.Telegram?.WebApp?.initData;
        const url = '/api/telegram-validate';
        const data = {
            hash
        }
        return this.http.post(url, data).pipe(map(() => window?.Telegram?.WebApp?.initDataUnsafe?.user?.first_name || 'Unknown'
        ))
    };
}
