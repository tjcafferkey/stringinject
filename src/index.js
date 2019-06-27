export default function stringInject(str, data) {
    if (typeof str === 'string' && (data instanceof Array)) {

        return str.replace(/{(\d)}/g,
            ( match, index ) => data[index]
        );
    } else if (typeof str === 'string' && (data instanceof Object)) {

        if (Object.keys(data).length === 0) {
            return str;
        }

        for (let key in data) {
            return str.replace(/{([^}]+)}/g,
                ( match, key ) => ( data[key] ? data[key] : match )
            );
        }
    } else if (typeof str === 'string' && data instanceof Array === false || typeof str === 'string' && data instanceof Object === false) {

            return str;
    } else {

        return false;
    }
}