<template>
  <div>
    <h1>Consulta de Ações</h1>
    <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Data</th>
          <th class="text-left">Valor Inicial</th>
          <th class="text-left">Valor Final</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="stock in stocks" :key="stock.name">
          <td>{{stock.name}}</td>
          <td>{{ stock.dateFormated }}</td>
          <td>{{ stock.value.start }}</td>
          <td>{{ stock.value.end }}</td>
        </tr>
      </tbody>
    </v-simple-table>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Stock from "../domain/stock/stock.entity";
import StockService from "../domain/stock/stock.service";

@Component
export default class Consulta extends Vue {
  stocks: Stock[] = [];

  created() {
    this.findAllStocks();
  }
  findAllStocks() {
    StockService.getAll().then(stocks => (this.stocks = stocks));
  }
}
</script>