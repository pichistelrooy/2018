<template>
  <section class='personas'>
    <fieldset>
      <legend> Ingrese los Datos de la Persona </legend>
        <p>	
          <label for="nombre">Nombre</label>
          <input type="text" @input="nameChanged" :value="nombre" id="name" placeholder="Ingrese su nombre">				
        </p>	
        <p>
          <label for="edad">Edad</label>
          <input type="number" @input="ageChanged" :value="edad" id="edad" placeholder="Ingrese su edad">		
        </p>
        <p>
          <label for="sexo">Sexo</label>
          <select name="sexo" @input="sexChanged" :value="sexo" id="sexo">
              <option disabled value="">Por favor seleccione su sexo</option>
              <option>Masculino</option>
              <option>Femenino</option>
              <option>N/S</option>
          </select>
        </p>
        
      <button @click="agregar()">Agregar</button>
    </fieldset>
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
</style>