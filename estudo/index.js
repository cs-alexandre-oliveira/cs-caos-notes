var _ = require('lodash')

var retorno = { data: { nome: { sobrenome: 'Ortense' } } }

var r;

var valor = _.get(r, 'data.nome.sobrenome[3]', 'valor default')

if(valor) {
    console.log('RETORNO DATA', valor)
} else {
    console.log('Não é retorno data')
}