import moment from "moment";

export function simNao(value) {
    return value ? 'Sim' : 'Não';
}

export function data(value, format = 'DD/MM/YYYY') {

    function handlerStringDate(value) {
        if (moment(value).isValid()) {
            if (moment(value, 'DD/MM/YYYY').isValid()) return moment(value, 'DD/MM/YYYY').format(format)
            if (moment(value, 'MM/YYYY').isValid()) return moment(value, 'MM/YYYY').format(format)
            if (moment(value, 'YYYY/MM').isValid()) return moment(value, 'YYYY/MM').format(format)
        }
        if (value.length === 6) {
            let date = '01/' + value.substr(0, 2) + '/' + value.substr(2);
            return moment(date, 'DD/MM/YYYY').format(format)
        }
        return '--/--/----'
    }

    if (typeof value === 'number' && moment(value).isValid()) return moment(value).format(format);

    if (typeof value === 'string') return handlerStringDate(value);

    if (value instanceof Date) {
        return moment(value, 'DD/MM/YYYY').format(format)
    }

    return '--/--/----'
}

export function valorReal(value) {
    let valor = parseFloat(value)

    if (isNaN(valor)) valor = 0

    return valor.toLocaleString('pt-bR', { style: 'currency', currency: 'BRL' })
}

export function cnpj(value) {
    if (typeof value === 'number') {
        value = `${value}`
    }
    if (typeof value === 'string' && value.length === 14) {
        return value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
    }
    return 'CNPJ Inválido'
}

export function cpf(value) {
    if (typeof value === 'number') {
        value = `${value}`
    }
    if (typeof value === 'string' && value.length === 11) {
        return value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    }
    return 'CPF Inválido'
}
