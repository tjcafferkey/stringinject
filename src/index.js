export default function stringInject(str, arr) {
    return str.replace(/({\d})/g, function(i) { 
        return arr[i.replace(/{/, '').replace(/}/, '')];
    });
}