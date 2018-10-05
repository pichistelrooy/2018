<template>
	<div id="app">

		<p v-if="errors.length">
			<b>Para ingresar una Persona necesita completar los siguientes campos:</b>
			<ul>
				<li v-for="error in errors" :key="error.id">{{ error }}</li>
			</ul>
		</p>

		<section class="header">
			<personas @nombre="setNombre" @edad="setEdad" @sexo="setSexo" @agregar="agregar" 
			:nombre="persona.nombre" :edad="persona.edad" :sexo="persona.sexo"/>
		</section>
		<br>
		<br>
		<table>
			<tr>
				<th>Nombre</th>
				<th>Edad(Años)</th>
				<th>Sexo</th>
			</tr>
			<tr v-for="(persona, index) in personas" :key="index">
				<th>{{ persona.nombre }}</th>
				<th>{{ persona.edad}}</th>
				<th>{{ persona.sexo}}</th>
				<th class="borrar" @click="borrarPersona(persona.id)">Borrame</th>
			</tr>	
		</table>
		<br>
		<h4>Total de Personas en la tabla: {{total}} persona/s</h4>
		<br>
		<br>
		<section>
			<listado @sexolista="setSexolista" @listar="listar" :sexolista="sexolista"/>
		</section>

		<ul>
			<li v-for="(persona, index) in listado" :key="index">
				<a>{{ persona.nombre }} {{ persona.edad}} años</a>
			</li>
			
			<h4>Total de Personas en la lista: {{totallistado}} persona/s</h4>
		</ul>

    </div>
</template>

<script>
	import Personas from './components/comp-personas.vue'
	import Listado from './components/comp-listado.vue'

export default {
  name: 'app',
  components: {
	Personas,
	Listado
  },
  data() {
    return {
		errors: [],
		personas: [],
		idInicial: 0,
		persona: {
			nombre: "",
			edad: 0,
			sexo: ""
		},
		sexolista: "",
		listado: []
    }
  },
  computed: {
		total() {
			return this.personas.length;
		},
		totallistado() {
			return this.listado.length;
		}
  },
  methods: {
    setNombre(nombre) {
      this.persona.nombre = nombre;
    },
    setEdad(edad) {
      this.persona.edad = edad;
    },
    setSexo(sexo){
      this.persona.sexo = sexo;
	},
	setSexolista(sexolista){
      this.sexolista = sexolista;
	},
    agregar() {
		if (this.persona.nombre && this.persona.edad && this.persona.sexo) {
		
			this.personas.push({
				id: this.idInicial++,
				nombre: this.persona.nombre,
				edad: this.persona.edad,
				sexo: this.persona.sexo
			});						
			this.persona.nombre = "";
			this.persona.edad = "";
			this.persona.sexo = "";
			
			this.errors = [];
			
		} else 
		{

			this.errors = [];

			if (!this.persona.nombre) {
				this.errors.push('El Nombre es requerido');
			}
			if (!this.persona.edad) {
				this.errors.push('La Edad es requerida');
			}    
			if (!this.persona.sexo) {
				this.errors.push('El Sexo es Requerido');
			}  		
			
		}						
	},
					
	borrarPersona(id) {
		this.personas = this.personas.filter(persona => persona.id !== id);
	},
	
	listar(sexolista) {
		this.listado = this.personas.filter(persona => persona.sexo == sexolista);
	}
	
  }
}
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.header{
  position: relative;
}
th, td {
    border: 1px solid black;
	text-align:center;
	margin: 0 auto;
}
table {
	border: 2px solid blue;
	text-align:center;
	margin: 0 auto;
}
h4 {
	text-align:center;
	margin: 0 auto;
}
.borrar {
	color: red;
}
</style>
