import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable()
export class apiservice {
    constructor(private http_c: HttpClient) { }

    getWeather(url:string){
        let h = new HttpHeaders().delete('Content-Type')
        return this.http_c.get(url + environment._weatherid);
    }

    login(data){
        return this.http_c.post(environment.endp2, data);
    }
}