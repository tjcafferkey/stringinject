function formatValue(value, formatString) {
    if ( formatString === ':f' ) {
        let parsedValue = parseFloat(value);
        if ( isNaN(parsedValue) ) {
            throw new TypeError( `Value '${ value }' is not a float` );
        }
        return parsedValue;
    } else if ( formatString === ':d' ) {
        let parsedValue = parseInt(value);
        if ( isNaN(parsedValue) ) {
            throw new TypeError( `Value '${ value }' is not an integer` );
        }
        return parsedValue;
    } else {
        return value;
    }

}

export default function stringInject(str, data) {
    if (typeof str === 'string' && (data instanceof Array)) {
        return str.replace(/{(\d)(:[df])?}/g,
            ( match, index, formatString ) => formatValue( data[index], formatString )
        );
    } else if (typeof str === 'string' && (data instanceof Object)) {

        if (Object.keys(data).length === 0) {
            return str;
        }

        for (let key in data) {
            return str.replace(/{([^}:]+)(:[df])?}/g,
                ( match, key, formatString ) => ( data[key] ? formatValue( data[key], formatString ) : match )
            );
        }
    } else if (typeof str === 'string' && data instanceof Array === false || typeof str === 'string' && data instanceof Object === false) {
        return str;
    } else {
        return false;
    }
}
