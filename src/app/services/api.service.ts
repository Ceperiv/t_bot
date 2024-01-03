import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';

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
            return window?.Telegram?.WebApp?.initData;
        }else return null; // or handle non-browser environment accordingly
    };

    getData() {
        const url = 'api/helloworld';
        return this.http.get<any>(url);
    };
    getTelegramUser(){
        const hash = this.telegramData();
        const url = '/api/telegram-user';
        const data = {
            hash
        }
        return this.http.post(url, data)
    };
}
