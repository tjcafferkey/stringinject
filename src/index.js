export default function stringInject(str, data) {
    if (typeof str === 'string' && (data instanceof Array)) {

        return str.replace(/({\d})/g, function (i) {
            return data[i.replace(/{/, '').replace(/}/, '')];
        });
    } else if (typeof str === 'string' && (data instanceof Object)) {

        if (Object.keys(data).length === 0) {
            return str;
        }

        for (let key in data) {
            return str.replace(/({([^}]+)})/g, function (i) {
                let key = i.replace(/{/, '').replace(/}/, '');

                const subKeys = key.split('.')
                if (subKeys.length > 1) {
                    try {
                        return subKeys.reduce((acc, key) => {
                            acc = acc[key]
                            return acc
                        }, data)
                    } catch (e) {
                        return `All data för ${key} finns inte!`
                    }
                }

                if (!data[key]) {
                    return i;
                }

                return data[key];
            });
        }
    } else if (typeof str === 'string' && data instanceof Array === false || typeof str === 'string' && data instanceof Object === false) {

        return str;
    } else {

        return false;
    }
}