# Demo: filters-vue-plugin

Plugin do vuejs de filtros para dados em português (pt-br)

## Instalação

```shell
  npm i filters-vue-plugin
```

## Configuração

1 - Criar pasta **plugns** dentro da pasta **src** (projeto vue/src/plugins)
2 - Dentro da pasta plugins criar arquivo filters.js

```javascript
/*

 src/plugins/filters.js

**/

import Vue from "vue";
import filters from "filters-vue-plugin";

Vue.use(filters);

export default filters;
```

3 - Aplicar filtro na instancia do Vue.

```javascript
/*

 src/mais.js

**/

import Vue from "vue";
import App from "./App.vue";
import filters from "./plugins/filters";

new Vue({
  filters,
  render: (h) => h(App),
}).$mount("#app");
```

---

# [DEMO](https://schappo.github.io/filters-vue-plugin-demo)

Filtros

- [data](##Data)
- [cnpj](##cnpj)
- [cpf](##cpf)
- [valorReal](##valorReal)
- [simNao](##simNao)

## Data

```js
function handlerStringDate(value) {
  if (moment(value).isValid()) {
    if (moment(value, "DD/MM/YYYY").isValid())
      return moment(value, "DD/MM/YYYY").format(format);
    if (moment(value, "MM/YYYY").isValid())
      return moment(value, "MM/YYYY").format(format);
    if (moment(value, "YYYY/MM").isValid())
      return moment(value, "YYYY/MM").format(format);
  }
  if (value.length === 6) {
    let date = "01/" + value.substr(0, 2) + "/" + value.substr(2);
    return moment(date, "DD/MM/YYYY").format(format);
  }
  return "--/--/----";
}

export function data(value, format = "DD/MM/YYYY") {
  if (typeof value === "number" && moment(value).isValid())
    return moment(value).format(format);

  if (typeof value === "string") return handlerStringDate(value);

  if (value instanceof Date) {
    return moment(value, "DD/MM/YYYY").format(format);
  }

  return "--/--/----";
}
```

## cnpj

```js
export function cnpj(value) {
  if (typeof value === "number") {
    value = `${value}`;
  }
  if (typeof value === "string" && value.length === 14) {
    return value.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      "$1.$2.$3/$4-$5"
    );
  }
  return "CNPJ Inválido";
}
```

## cpf

```js
export function cpf(value) {
  if (typeof value === "number") {
    value = `${value}`;
  }
  if (typeof value === "string" && value.length === 11) {
    return value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
  return "CPF Inválido";
}
```

## valorReal

```js
export function valorReal(value) {
  let valor = parseFloat(value);

  if (isNaN(valor)) valor = 0;

  return valor.toLocaleString("pt-bR", { style: "currency", currency: "BRL" });
}
```

## simNao

```js
export function simNao(value) {
  return value ? "Sim" : "Não";
}
```
