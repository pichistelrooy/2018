<template>
  <section>  
    <bCard bg-variant="dark" text-variant="white" border-variant="primary">
        <bCardHeader class="card text-white bg-primary mb-3"> Ingrese los Datos de la Persona </bCardHeader>
        <bCardBody>	
          <label for="nombre">Nombre</label>
          <input type="text" @input="nameChanged" :value="nombre" id="nombre"
              placeholder="Ingrese su nombre" class="form-control">	
          <br>
          <label for="edad">Edad</label>
          <input type="number" @input="ageChanged" :value="edad" id="edad"
              placeholder="Ingrese su edad" class="form-control">
          <br>
          <label for="sexo">Sexo</label>
          <select name="sexo" @input="sexChanged" :value="sexo" id="sexo" class="form-control">
              <option disabled value="">Por favor seleccione su sexo</option>
              <option>Masculino</option>
              <option>Femenino</option>
              <option>N/S</option>
          </select>
        </bCardBody>
        <bCardFooter>
          <bButton @click="agregar()" text-variant="white" variant="outline-primary">Agregar</bButton>
        </bCardFooter>
    </bCard>
  </section>
</template>

<script>
  export default {
    name: 'personas',
    props: {
      nombre: String,
      edad: 0,
      sexo: String
    },

    methods: {
      nameChanged(event) {
        this.$emit('nombre', event.target.value);
      },
      ageChanged(event) {
        this.$emit('edad', event.target.value);
      },
      sexChanged(event) {
        this.$emit('sexo', event.target.value);
      },
      agregar() {
        this.$emit('agregar');
      }
    }   
  }
</script>

<style>
  .loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid blue;
  border-right: 16px solid green;
  border-bottom: 16px solid red;
  border-left: 16px solid pink;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  margin: 0 auto;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>-->