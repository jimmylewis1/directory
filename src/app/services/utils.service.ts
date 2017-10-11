import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

    constructor() {
    }

    public formatTelephoneNumber(tel: string, fancy: boolean = true, blank: boolean = false): string {
        // fancy returns a number formatted like, (000) 000-0000, instead of 000-000-0000
        // blank means to return nothing, instead of 'Unknown'

        if (!tel || (typeof tel === 'undefined' || tel.length === 0)) {
            return blank
                ? ''
                : 'Unknown';
        }

        let value = tel.toString().trim().replace(/^\+/, '').replace(/\-/g, '');

        if (value.match(/[^0-9]/)) {
            return tel;
        }

        let country: string;
        let city;
        let number;

        switch (value.length) {
            case 7: // ####### -> ###-####
                country = '1';
                city = '';
                number = tel;
                break;
            case 10: // +1PPP####### -> C (PPP) ###-####
                country = '1';
                city = value.slice(0, 3);
                number = value.slice(3);
                break;

            case 11: // +CCPPP####### -> CC (PP) ###-####
                country = value[0];
                city = value.slice(1, 4);
                number = value.slice(4);
                break;

            case 12: // +CCCPP####### -> CCC (PP) ###-####
                country = value.slice(0, 3);
                city = value.slice(3, 5);
                number = value.slice(5);
                break;

            default:
                return tel;
        }

        if (country === '1') {
            country = '';
        }

        // Add separator to last 7-digits of number
        number = number.slice(0, 3) + '-' + number.slice(3);

        if (fancy) {
            if (city.length > 0) {
                return (country + ' (' + city + ') ' + number).trim();
            } else {
                return (number).trim();
            }
        } else {
            if (city.length > 0) {
                return (country.length > 0) ? (country + '-' + city + '-' + number).trim() : (city + '-' + number).trim();
            } else {
                return (number).trim();
            }
        }
    }
}
