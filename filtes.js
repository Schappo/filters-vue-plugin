import moment from "moment";

export function simNao (value) {
    return value ? 'Sim' : 'Não';
}

export function data (value) {
    const nullDate = '--/--/----';
    
    if (typeof value === 'string') {
        if(value.length === 6) return moment(value).format('YYYYMM')
        else if (value.length === 10) return moment(value).format('DD/MM/YYYY')
        else if (value.length === 7) return moment(value).format('MM/YYYY')
        else return nullDate; 
    } 
    else if (typeof value === 'number') return moment(value)
    else if (value instanceof Date) return moment(value)

    else return nullDate;
}

export function valorReal(value) {
    if(typeof value === 'number') {
        let valor = parseFloat(value)

        if (isNaN(valor)) valor = 0

        return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    } else {
        return value ? `R$ ${value}` : value;
    }
}
