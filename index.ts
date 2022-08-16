export function getNames(e: Object) {
    return Object.keys(e).filter(v => isNaN(parseInt(v, 10)));
}

export function getValues(e: any) {
    return Object.keys(e).filter(k => k.split(' ').length == 1).map(v => parseInt(v, 10)).filter(v => !isNaN(v));
}

export function getNamesAndValues(e: any) {
    return getValues(e).map(v => { return { name: <string>e[v], value: v }; });
}
export function getName(e: Object, v: number) {
    return e[v];
}
// export default {
//     getNames,
//     getValues,
//     getNamesAndValues,
//     getName
// }