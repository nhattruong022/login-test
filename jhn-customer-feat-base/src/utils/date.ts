import { format } from 'date-fns';
import { replace } from 'lodash';

export enum FORMAT_DATE {
    DB_DATE_TIME = 'yyyy-MM-dd HH:mm:ss',
    DB_DATE = 'yyyy-MM-dd',
    DB_DATE_MINUTE = 'yyyy-MM-dd HH:mm',
    DB_DATE_MINUTE_T = 'yyyy-MM-ddTHH:mm',
    SHOW_DATE_TIME = 'dd/MM/yyyy HH:mm:ss',
    SHOW_DATE_MINUTE = 'dd/MM/yyyy HH:mm',
    SHOW_ONLY_DATE = 'dd/MM/yyyy',
}

export const currentDateTime = (formatDate: FORMAT_DATE = FORMAT_DATE.DB_DATE) => format(new Date(), formatDate);

export const formatDateTime = (beginDate: string | Date, endFormat: FORMAT_DATE) =>
    format(new Date(beginDate), endFormat);

export const formatInputDateTime = (date: string | undefined, isDateTime = false) => {
    if (!date) {
        return '';
    }
    if (date.indexOf('T') > 0) {
        return isDateTime ? replace(replace(date, ':00.000Z', ''), 'T', ' ') : replace(date, 'T00:00:00.000Z', '');
    }
    return formatDateTime(date, FORMAT_DATE.DB_DATE_MINUTE).replace(' ', 'T');
};
