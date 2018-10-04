export const sleep = m => new Promise(r => setTimeout(r, m));

export function extendModel(model, prototype) {
    let newModel = Object.create(prototype);
    Object.assign(newModel, model);

    return newModel;
}
