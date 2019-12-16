import { Response } from '@angular/http';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError as observableThrowError } from 'rxjs';

export abstract class ServiceBase {
    constructor() {
        
    }
    protected obterHttpOptions() {
        return {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',

            })
        };
    }
    
    protected serviceError(error: Response | any) {       
        let errMsg: string;           
        if (error instanceof HttpErrorResponse) {
            if (error.error) {
                errMsg = error.error.errors ? error.error : { errors: [`${error.status} - ${error.statusText}`] };
            }
            else {
                if(error.status == 401){
                    console.log('Acesso negado!');
                }                
                errMsg = error.message ? `${error.status} - ${error.statusText}` : error.toString();
            }
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return observableThrowError(errMsg);
    }


    protected extractData(data: any) {
        return data.data || {};
    }
}