<template>
  <bContainer id="Personas">
        
		<p v-if="errors.length">
			<b>Para ingresar una Persona necesita completar los siguientes campos:</b>
			<bListGroup>
				<bListGroupItem variant="danger" v-for="error in errors" :key="error.id">{{ error }}</bListGroupItem>
			</bListGroup>
		</p>

    <comp-personas @nombre="setNombre" @edad="setEdad" @sexo="setSexo" @agregar="agregar" 
		:nombre="persona.nombre" :edad="persona.edad" :sexo="persona.sexo"></comp-personas>
		<br>
		<section v-if="success">
			<bAlert variant="success" show>Persona agregada correctamente</bAlert>
		</section>

		<section v-if="error">	
			<bAlert class="alert alert-danger message">{{ error }}</bAlert>
		</section>	

		<section v-if="espere">
      <div class="loader"></div>
    </section>

		<br>
    <bTable class="table table-sm table-bordered table-dark" :items="items" :fields="fields">
				<template slot="acciones" slot-scope="row">
					<bButton size="sm" @click="borrarPersona(row.item.id)" text-variant="white" 
						variant="outline-danger">
						Borrame
					</bButton>
					<bButton size="sm" @click="editar(row.item.id)" text-variant="white" 
						variant="outline-success">
						Editame
					</bButton>
				</template>	
		</bTable>

		<section v-if="espere3">
      <div class="loader"></div>
    </section>
		<section v-if="success3">
			<bAlert variant="success" show>Persona borrada correctamente</bAlert>
		</section>

		<br>
		<bAlert show variant="dark">Total de Personas en la tabla: {{total}} persona/s</bAlert>
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

  </bContainer>
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
		fields: [ 'edad', 'nombre', 'sexo', 'acciones' ],	
		items: [],
		espere: false,
		espere2: false,
		espere3: false,
		success: undefined,
		success3: undefined,
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
					this.success3 = response;
					this.personas = PersonaService.getAll();
					this.items = this.personas;
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
					this.items = this.personas;
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
		this.items = this.personas;
  }
  
}
</script>

