<template>
  <section id="Listado">
    <comp-listado @sexolista="setSexolista" @listar="listar" :sexolista="sexolista"></comp-listado>

    <section v-if="espere">
      <div class="loader"></div>
    </section>

    <br>
    <bListGroup>
			<bListGroupItem variant="info" v-for="persona in listado" :key="persona.id">
            {{ persona.nombre }} {{ persona.edad}} años</bListGroupItem>
		</bListGroup>
    <br>
		<bAlert show variant="dark">Total de Personas en la tabla: {{totallistado}} persona/s</bAlert>
  </section>
</template>

<script>
import CompListado from '@/components/comp-listado.vue';
import PersonaService from "@/services/personaService";

export default {
  name: 'Listado',
  components: {
    CompListado
  },
  data() {
    return {
    espere: false,
		sexolista: "",
		listado: [],
    }
  },
  computed: {
		totallistado() {
			return this.listado.length;
		}
  },
  methods: {
    setSexolista(sexolista){
      this.sexolista = sexolista;
		},
	
		listar(sexolista) {
      this.espere = true
      PersonaService.getBySex(sexolista)
        .then((personas) => {
          this.listado = personas;
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

