import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Observable} from 'rxjs';
import { StorageMap } from '@ngx-pwa/local-storage';

interface OPTIONS {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    // responseType: "arraybuffer";
    withCredentials?: boolean;
}


@Injectable()
export class ApiService {

    constructor(private http: HttpClient, private storage: StorageMap) {}
    handleResponse(ret: any, observer: any) {
        if(ret) {
            observer.next(ret);
            
        } else {
            observer.error(ret.error);
        }
    }

    getOptions() {
        const ret = new Observable<any>((subscriber: any) => {
            this.storage.get('token').subscribe((token: any) => {
                if(!token) {
                    subscriber.error({error: 'token not existed'});
                }
                const httpHeaders = new HttpHeaders({
                    'Content-Type': 'application/json',
                    'x-access-token': token
                });
                const options = {
                    headers: httpHeaders
                };
                return subscriber.next(options);
            });


        });
        return ret;
    }

    postPublic(uri: string, data: any) {
        const ret = new Observable<any>((observer) => {
            
            this.http.post<any>(environment.API + uri, data).subscribe(
                (ret: any) => {
                    this.handleResponse(ret, observer);
                },
                (err: any) => {
                    observer.error(err.error);
                }
            );
        });
        return ret;
        //return this.post<any>(environment.API + uri, data);
    }

    getPublic(uri: string) {
        const ret = new Observable<any>((observer) => {
            this.http.get<any>(environment.API + uri).subscribe(
                (ret: any) => {
                    this.handleResponse(ret, observer);
                },
                (err: any) => {
                    observer.error(err.error);
                }
            );
        });
        return ret;
    }

    getPrivate(uri: string) {

        const ret = new Observable<any>((observer) => {
            this.getOptions().subscribe(options => {
                this.http.get<any>(environment.API + uri, options).subscribe(
                    (ret: any) => {
                        this.handleResponse(ret, observer);
                    },
                    (err: any) => {
                        observer.error(err.error);
                    }
                );
            });
        });
        return ret;
    }

    postPrivate(uri: string, data: any) {

        const ret = new Observable<any>((observer) => {
            this.getOptions().subscribe(options => {
                this.http.post<any>(environment.API + uri, data, options).subscribe(
                    (ret: any) => {
                        this.handleResponse(ret, observer);
                    },
                    (err: any) => {
                        observer.error(err.error);
                    }
                );
            });
        });
        return ret;
    }  
 

    postPrivateFormData(uri: string, data: any) {
        const ret = new Observable<any>((observer) => {
            this.getOptions().subscribe(options => {          
                this.http.post<any>(environment.API + uri, data, options).subscribe(
                    (ret: any) => {
                        observer.next(ret);
                    },
                    (err: any) => {
                        observer.error(err.error);
                    }
                );
            });
        });
        return ret;
    }  

    putPrivate(uri: string, data: any) {
        const ret = new Observable<any>((observer) => {
            this.getOptions().subscribe(options => {         
                this.http.put<any>(environment.API + uri, data, options).subscribe(
                    (ret: any) => {
                        this.handleResponse(ret, observer);
                    },
                    (err: any) => {
                        observer.error(err.error);
                    }
                );
            });
        });
        return ret;
    }    
}