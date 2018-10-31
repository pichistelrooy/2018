<template>
  <section>
    <bCard bg-variant="dark" text-variant="white" border-variant="warning">
    <bCardHeader class="card text-white bg-warning mb-3"> Ingrese los Datos de la Persona </bCardHeader>
      <bCardBody>	 
        <label for="nombre">Nombre</label>
        <bFormInput type="text" @input.native="nameChangededit" :value="nombreedit" id="nombreedit" 
          placeholder="Ingrese su nombre" size="sm"></bFormInput>				
        <br>
        <label for="edad">Edad</label>
        <bFormInput type="number" @input.native="ageChangededit" :value="edadedit" id="edadedit" 
          placeholder="Ingrese su edad" size="sm" :state="edadState" 
          aria-describedby="inputLiveHelp inputLiveFeedback"></bFormInput>
        <bFormInvalidFeedback id="inputLiveFeedback">
          <!-- This will only be shown if the preceeding input has an invalid state -->
          Edad permitida: 0-150 años
        </bFormInvalidFeedback>  
        <br>
        <bFormSelect name="sexo" @input.native="sexChangededit" :value="sexoedit" id="sexoedit"
        size="sm" style="max-width: 20rem;">
            <option disabled value="">Por favor seleccione su sexo</option>
            <option>Masculino</option>
            <option>Femenino</option>
            <option>N/S</option>
        </bFormSelect>
    </bCardBody>
    <bCardFooter>
      <bButton @click="editarpersona()" text-variant="white" variant="outline-warning" :disabled="!edadState">Editar</bButton>
    </bCardFooter>
    </bCard>
  </section>
</template>

<script>
  export default {
    name: 'edicion',
    props: {
      idedit: 0, 
      nombreedit: String,
      edadedit: 0,
      sexoedit: String
    },

    computed: {
      edadState () {
        if (this.edadedit < 151 && this.edadedit >= 0) {
          return true;  
        }
        else{
          return false;
        }      
      }
    },

    methods: {
      nameChangededit(event) {
        this.$emit('nombre', event.target.value);
      },
      ageChangededit(event) {
        this.$emit('edad', event.target.value);
      },
      sexChangededit(event) {
        this.$emit('sexo', event.target.value);
      },
      editarpersona() {
        this.$emit('editarpersona');
      }
    }
  }
</script>
