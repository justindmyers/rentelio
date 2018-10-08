import dayjs from 'dayjs';

export const sleep = m => new Promise(r => setTimeout(r, m));

export function extendModel(model, prototype) {
    let newModel = Object.create(prototype);
    Object.assign(newModel, model);

    return newModel;
}

export function formatShortDate(date) {
    return dayjs(date).format('MMM DD, YYYY');
}

export function formattedAddress(address, address2) {
    return `${address}${address2 ? ', ' + address2 : '' }`;
}

export function formattedAddress2(city, state, zipCode) {
    return `${city}, ${state} ${zipCode}`;
}