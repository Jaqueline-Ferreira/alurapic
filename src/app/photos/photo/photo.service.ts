import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class PhotoService {

    constructor(private http: HttpClient) {}

    listFromUser(userName: string) {

    return this.http
    .get<object[]>('http://localhost:3000/flavio/photos')

    }
}