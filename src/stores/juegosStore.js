import { ref, computed } from "vue";
import { defineStore } from "pinia";
import juegoSData from "../data/juegos.json";

export const useJuegosStore = defineStore("juegos", () => {
  const juegos = ref(juegoSData);

  const incrementarStock = (index) => {
    juegos.value[index].stock++;
  };

  const decrementarStock = (index) => {
    if (juegos.value[index].stock > 0) {
      juegos.value[index].stock--;
    } else {
      alert("No hay stock disponible");
    }
  };
  return { juegos, incrementarStock, decrementarStock };
});
