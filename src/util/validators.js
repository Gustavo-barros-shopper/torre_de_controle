export function email(value) {
    if (!value) return true;
    return (/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/g).test(value);
}
export function username(value) {
    if (!value) return true;
    return (/[a-z0-9_.+-]+/g).test(value);
}
export function car_year(value) {
    if (!value) return true;
    return (/(19(8|9)[0-9])|(20(0[0-9]|1[0-9]|2[0-9]))/g).test(value);
}
export function license_plate(value) {
    if (!value) return true;
    return (/[a-zA-Z]{3}-[0-9]{4}|[a-zA-Z]{3}[0-9]{4}|[a-zA-Z]{3}-[0-9][a-zA-Z][0-9]{2}|[a-zA-Z]{3}[0-9][a-zA-Z][0-9]{2}/g).test(value);
}
export function zip_code(value) {
    if (!value) return true;
    return (/([0-9]{5}-[0-9]{3}|[0-9]{5}[0-9]{3})/g).test(value);
}
export function phone(value) {
    if (!value) return true;
    return (/\([0-9]{2}\) ([0-9]{5}|[0-9]{4})-[0-9]{4}/g).test(value);
}
export function antt(value) {
    if (!value) return true;
    return (/[0-9]+/g).test(value);
}
export function cpf(value) {
    if (!value) return true;
    let multiplier, product, sum, r, f;
    const matches = value.match(/[0-9]/g);
    if (!matches.length || matches.length < 11) {
        return false;
    } else {
        // 10
        const nine = matches.slice(0, 9);
        multiplier = [10, 9, 8, 7, 6, 5, 4, 3, 2];
        product = nine.map(function (v, i) {
            return parseInt(v) * multiplier[i]
        });
        sum = product.reduce(function (a, b) {
            return a + b
        }, 0);
        r = (sum*10) % 11;
        if (r === 10 || r === 11) { f = 0 }
        else { f = r }
        nine.push(f);

        // 11
        const ten = matches.slice(0, 10);
        multiplier = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
        product = ten.map(function (v, i) {
            return parseInt(v) * multiplier[i]
        });
        sum = product.reduce(function (a, b) {
            return a + b
        }, 0);
        r = (sum*10) % 11;
        if (r === 10 || r === 11) { f = 0 }
        else { f = r }
        nine.push(f);
        if (matches.join('') !== nine.join('')) {
            return false;
        }
    }
    return true;
}
export function cnpj (value) {
    if (!value) return true;
    let f;
    const matches = value.match(/[0-9]/g);
    if (!matches || !matches.length || matches.length < 14) {
        return false;
    } else {
        const twelve = matches.slice(0, 12);
        const multiplier = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        let tests = 0;
        while (twelve.length < 14 && tests < 300) {
            const product = twelve.map(function (v, i) {
                return parseInt(v) * multiplier[i]
            });
            const sum = product.reduce(function (a, b) {
                return a + b
            }, 0);
            const r = sum % 11;
            if (r > 1) { f = 11 - r }
            else { f = 0 }
            twelve.push(f);
            multiplier.splice(0, 0, 6);
            tests++;
        }
        if (matches.join('') !== twelve.join('')) {
            return false;
        }
    }
    return true;
}
export function vin_number (value) {
    var matches = value.match(/[0-9]/g)

    if (!matches.length || matches.length < 11) {
        return false
    } else {
        var ten = matches.slice(0, 10)
        var multiplier = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
        var tests = 0

        while (ten.length < 11 && tests < 300) {
            var product = ten.map(function (v, i) {
                return parseInt(v) * multiplier[i]
            })

            var sum = product.reduce(function (a, b) {
                return a + b
            }, 0)

            var r = (sum*10) % 11

            if (r == 10) { var f = 0 }
            else { var f = r }

            ten.push(f)

            tests++
        }

        if (matches.join('') != ten.join('')) {
            return false
        }
    }
    return true
}

export function rg(value) {
    if (!value) return true;
    let f;
    const matches = value.match(/[0-9]/g);
    if (!matches.length || matches.length < 9) {
        return false;
    } else {
        const eight = matches.slice(0, 8);
        const multiplier = [2, 3, 4, 5, 6, 7, 8, 9];
        const product = eight.map(function (v, i) {
            return parseInt(v) * multiplier[i];
        });
        const sum = product.reduce(function (a, b) {
            return a + b;
        }, 0);

        const r = (sum * 10) % 11;

        if (r == 10) {
            f = 0;
        } else {
            f = r;
        }

        eight.push(f);

        if (matches.join('') != eight.join('')) {
            return false;
        }
    }
    return true;
}

export function driver_license (value) {
    if (!value) return true;
    let f, multiplier, product, sum, r, dsc;
    const matches = value.match(/[0-9]/g);
    if (!matches.length || matches.length < 11) {
        return false;
    } else {
        // 10
        const nine = matches.slice(0, 9);
        multiplier = [9, 8, 7, 6, 5, 4, 3, 2, 1];
        product = nine.map(function (v, i) {
            return parseInt(v) * multiplier[i];
        });
        sum = product.reduce(function (a, b) {
            return a + b;
        }, 0);
        r = sum % 11;

        if (r >= 10) {
            f = 0;
            dsc = 2;
        } else {
            f = r;
            dsc = 0;
        }
        nine.push(f);

        // 11
        const nine2 = matches.slice(0, 9)
        multiplier = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        product = nine2.map(function (v, i) {
            return parseInt(v) * multiplier[i];
        });
        sum = product.reduce(function (a, b) {
            return a + b;
        }, 0);
        r = sum % 11;

        if (r >= 10) {
            f = 0;
        } else {
            f = r - dsc;
        }

        nine.push(f);

        if (matches.join('') != nine.join('')) {
            return false;
        }
    }
    return true;
}

export function late_date (value) {
    if (value.match(/[0-9]/g).length < 8) {
        return false
    }

    if (value.indexOf('-') == 4) {
        return new Date(value) > new Date()
    } else if (value.indexOf('/') == 2) {
        var d = value.split('/')
        return new Date([d[2],d[1],d[0]].join('-')) > new Date()
    } else if (value.length == 8) {
        var d = [value.substr(4, 4), value.substr(2, 2), value.substr(0, 2)]
        return new Date(d.join('-')) > new Date()
    }
    return false
}

export function password(value) {
    if (!value) {
        return true
    } else {
        return value.length >= 6
    }
}