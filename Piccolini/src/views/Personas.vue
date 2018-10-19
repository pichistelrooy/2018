<template>
  <section id="Personas">
    
    <p v-if="errors.length">
			<b>Para ingresar una Persona necesita completar los siguientes campos:</b>
			<ul>
				<li v-for="error in errors" :key="error.id">{{ error }}</li>
			</ul>
		</p>

    <comp-personas @nombre="setNombre" @edad="setEdad" @sexo="setSexo" @agregar="agregar" 
		:nombre="persona.nombre" :edad="persona.edad" :sexo="persona.sexo"></comp-personas>
		<br>
		<section v-if="success">
			<p class="alert alert-success message">{{ success }}</p>
		</section>

		<section v-if="error">	
			<p class="alert alert-danger message">{{ error }}</p>
		</section>	

		<section v-if="espere">
      <div class="loader"></div>
    </section>

		<br>
    <table class="table table-dark">
			<thead>
				<tr>
					<th scope="col">Nombre</th>
					<th scope="col">Edad(Años)</th>
					<th scope="col">Sexo</th>
				</tr>
			</thead>
			<tbody>	
				<tr v-for="(persona, index) in personas" :key="index">
					<th>{{ persona.nombre }}</th>
					<th>{{ persona.edad}}</th>
					<th>{{ persona.sexo}}</th>
					<th class="borrar" @click="borrarPersona(persona.id)">Borrame</th>
					<th class="editar" @click="editar(persona.id)">Editame</th>
				</tr>
			</tbody>		
		</table>

		<section v-if="espere3">
      <div class="loader"></div>
    </section>

		<br>
		<h4>Total de Personas en la tabla: {{total}} persona/s</h4>
		<br>

		<section v-if ="edicion.persona !== undefined">
        <comp-editar
				@nombre="setNombreEdit" @edad="setEdadEdit" @sexo="setSexoEdit"
				@editarpersona="editarpersona"
				:idedit ="edicion.persona.id"
        :nombreedit ="edicion.persona.nombre"
        :edadedit ="edicion.persona.edad"
        :sexoedit ="edicion.persona.sexo"></comp-editar>
    </section>

		<section v-if="espere2">
      <div class="loader"></div>
    </section>

  </section>
</template>

<script>
import CompPersonas from '@/components/comp-personas.vue';
import CompEditar from '@/components/comp-editar.vue';
import PersonaService from "@/services/personaService";

export default {
  name: 'Personas',
  components: {
		CompPersonas,
		CompEditar
  },
  data() {
    return {
		espere: false,
		espere2: false,
		espere3: false,
		success: undefined,
    error: undefined,
		errors: [],
		personas: [],
		persona: {
			nombre: "",
			edad: 0,
			sexo: ""
			},
		edicion: {
      id: Number,
      persona: undefined
      }
		}
  },
  computed: {
		total() {
			return this.personas.length;
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
    agregar() {
			if (this.persona.nombre && this.persona.edad && this.persona.sexo) {
				this.espere = true
				PersonaService.create(this.persona)
          .then( (response) => {
            this.success = response;
						this.espere = false

            setTimeout(() => {
              this.success = undefined
						}, 2500);
						
						this.personas = PersonaService.getAll();

            this.persona.nombre = ''
            this.persona.edad = 0
						this.persona.sexo = ''
					})
				
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

		setNombreEdit(nombre) {
      this.edicion.persona.nombre = nombre;
    },
    setEdadEdit(edad) {
      this.edicion.persona.edad = edad;
    },
    setSexoEdit(sexo){
      this.edicion.persona.sexo = sexo;
		},
		setIDEdit(id){
      this.edicion.persona.id = id;
		},
					
		borrarPersona(id) {
			this.espere3 = true
			PersonaService.delete(id)
				.then( (response) => {
					this.success = response;
					this.personas = PersonaService.getAll();
					this.espere3 = false
					
					setTimeout(() => {
              this.success = undefined
						}, 2500);
				})
				.catch( (except) => {
            this.error = except
            
            setTimeout(() => {
              this.error = undefined
            }, 2500)
        })
		},

		editar(id) {
			let aux = this.personas.find(persona => persona.id === id);
			if (this.edicion.persona === undefined) {
				this.edicion.persona = {
					id: aux.id,
					nombre: aux.nombre,
					edad: aux.edad,
					sexo: aux.sexo
				};
			} else {
				if (this.edicion.persona.id === id) {
					this.edicion.persona = undefined;
				} else {
					this.edicion.persona = {
						id: aux.id,
						nombre: aux.nombre,
						edad: aux.edad,
						sexo: aux.sexo
					};
				}
			}
		},

		editarpersona() {
			this.espere2 = true
			PersonaService.update(this.edicion.persona)
				.then( (response) => {
					this.success = response;
					this.personas = PersonaService.getAll();
					this.espere2 = false

					setTimeout(() => {
              this.success = undefined
						}, 2500);
				})
				.catch( (except) => {
            this.error = except
            
            setTimeout(() => {
              this.error = undefined
            }, 2500)
        })

			this.edicion.persona = undefined;
		}

	},
	
	created() {
     this.personas = PersonaService.getAll();
  }
  
}
</script>

