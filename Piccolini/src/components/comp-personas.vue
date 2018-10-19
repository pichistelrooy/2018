<template>
  <section class='personas'>  
    <fieldset class="card">
      <div class="card text-white bg-primary mb-3">
        <legend class="card-header"> Ingrese los Datos de la Persona </legend>
      </div>
        <p class="card-body">	
          <label for="nombre">Nombre</label>
          <input type="text" @input="nameChanged" :value="nombre" id="nombre" placeholder="Ingrese su nombre">				

          <label for="edad">Edad</label>
          <input type="number" @input="ageChanged" :value="edad" id="edad" placeholder="Ingrese su edad">		

          <label for="sexo">Sexo</label>
          <select name="sexo" @input="sexChanged" :value="sexo" id="sexo">
              <option disabled value="">Por favor seleccione su sexo</option>
              <option>Masculino</option>
              <option>Femenino</option>
              <option>N/S</option>
          </select>
        </p>
    </fieldset>
    <br>
    <div class="divbutton">
      <button @click="agregar()" class="btn btn-danger">Agregar</button>
    </div>  
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
  .personas{
    width: 100%;
  }
  label {
    color: red;
    padding: 1ch;
  }
  .message {
    text-align: center;
  }
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
.divbutton {
  margin: 0 auto;
  text-align: center;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>