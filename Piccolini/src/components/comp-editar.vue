<template>
  <section>
    <bCard bg-variant="dark" text-variant="white" border-variant="warning">
    <bCardHeader class="card text-white bg-warning mb-3"> Ingrese los Datos de la Persona </bCardHeader>
      <bCardBody>	 
        <p class="card-body">	
          <label for="nombre">Nombre</label>
          <input type="text" @input="nameChangededit" :value="nombreedit" id="nombreedit" 
            placeholder="Ingrese su nombre" class="form-control">				

          <label for="edad">Edad</label>
          <input type="number" @input="ageChangededit" :value="edadedit" id="edadedit" 
            placeholder="Ingrese su edad" class="form-control">		

          <label for="sexo">Sexo</label>
          <select name="sexo" @input="sexChangededit" :value="sexoedit" id="sexoedit" class="form-control">
              <option disabled value="">Por favor seleccione su sexo</option>
              <option>Masculino</option>
              <option>Femenino</option>
              <option>N/S</option>
          </select>
        </p>
    </bCardBody>
    <bCardFooter>
      <bButton @click="editarpersona()" text-variant="white" variant="outline-warning">Editar</bButton>
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
