import { Admin } from './../models/admin';
import { AbstractPreferences } from './preferences';
import { environment as env } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
export class Base extends AbstractPreferences {
    private _host = env.host;
    private _api = env.api;
    protected _baseUrl!: string;
    protected httpClient!: HttpClient;

    constructor() {
        super();
    }

    isLogIn(): boolean {
        return this.getToken() == null ? false : true;
    }

    get authorizationHeaders() {
        return {
            Accept: 'application/json',
            'Content-type': 'application/json',
            Authorization: 'Bearer ' + this.getToken()!,
        };
    }

    get guestHeaders() {
        return {
            Accept: 'application/json',
            'Content-type': 'application/json',
        };
    }
    setUser(user: User) {
        sessionStorage.setItem('user', JSON.stringify(user));
    }
    get http() {
        return this.httpClient;
    }

    set http(http) {
        this.httpClient = http;
    }
    get api(): string {
        return this._api;
    }

    get host(): string {
        return this._host;
    }
    get endPoint() {
        return this.api + this.baseUrl;
    }
    get baseUrl(): string {
        return this._baseUrl;
    }

    logout() {
        return this.http.get(this.api + 'admin/logout', {
            headers: this.authorizationHeaders
        });
    }

    getUser(): User {
        return JSON.parse(sessionStorage.getItem('user')!);
    }

    clearSession() {
        sessionStorage.clear();
        localStorage.clear();
    }
}
