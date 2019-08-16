<template>
  <div>
    <v-card max-width="600" class="mx-auto" elevation="4">
      <v-card-title>Cadastro de Ações</v-card-title>
      <v-container grid-list-xl>
        <v-layout wrap>
          <v-flex xs12 sm12 md11>
            <v-text-field v-model="stock.name" type="text" label="Nome"></v-text-field>
          </v-flex>
          <v-flex xs12 sm3 md3>
            <v-text-field v-model="stock.date" label="Data" type="date"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md3>
            <v-text-field v-model="stock.value.start" label="Valor Inicial" type="number"></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md3>
            <v-text-field v-model="stock.value.end" label="Valor Final" type="number"></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-actions>
        <v-btn @click="save" color="green" dark>Salvar</v-btn>
        <v-btn @click="cancel" color="red" dark>Cancelar</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Stock from "../domain/stock/stock.entity";
import StockService from "../domain/stock/stock.service";

@Component
export default class Cadastro extends Vue {
  stock = new Stock({});
  erro:boolean=false;

  save() {

    StockService.save(this.stock);
    this.erro=StockService.erro;
      
  }

  cancel() {
    this.$router.push("/consulta");
  }
}
</script>
<style lang="sass" scoped>
.v-card
  margin-top: 30px

.alert
  text-color: red
</style>