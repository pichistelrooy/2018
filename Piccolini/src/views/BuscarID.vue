<template>
  <section id="BuscarID">
    <comp-buscar-i-d @id="setid" @buscarxid="buscarxid" :id="id"></comp-buscar-i-d>

    <section v-if="espere">
      <div class="loader"></div>
    </section>
    
    <ul>
      <li v-if="busqueda.persona !== undefined">
          <a>{{ busqueda.persona.sexo }} {{ busqueda.persona.id }} {{ busqueda.persona.nombre }} {{ busqueda.persona.edad}} años</a>
      </li>
    </ul>

  </section>
</template>

<script>
import CompBuscarID from '@/components/comp-buscarxid.vue';
import PersonaService from "@/services/personaService";

export default {
  name: 'BuscarID',
  components: {
    CompBuscarID
  },
  data() {
    return {
    espere: false,
    id: 0,
    persona: {
			nombre: "",
			edad: 0,
			sexo: ""
			},
    busqueda: {
      id: Number,
      persona: undefined
      }
    }
  },
  methods: {
    setid(id){
      this.id = id;
    },
  
    buscarxid(id) {
      this.espere = true
      PersonaService.getOne(id)
        .then((personas) => {
          this.busqueda.persona = personas;
          this.espere = false

          setTimeout(() => {
            this.success = undefined
          }, 2500);
          
        })
        .catch((err) => {
          this.error = err;
        });
    }
  }
}
</script>

