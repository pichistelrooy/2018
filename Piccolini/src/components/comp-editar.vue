<template>
  <section class='edicion'>
    <fieldset class="card">
      <div class="card text-white bg-success mb-3">
        <legend class="card-header"> Ingrese los Datos de la Persona </legend>
      </div>  
        <p class="card-body">	
          <label for="nombre">Nombre</label>
          <input type="text" @input="nameChangededit" :value="nombreedit" id="nombreedit" placeholder="Ingrese su nombre">				

          <label for="edad">Edad</label>
          <input type="number" @input="ageChangededit" :value="edadedit" id="edadedit" placeholder="Ingrese su edad">		

          <label for="sexo">Sexo</label>
          <select name="sexo" @input="sexChangededit" :value="sexoedit" id="sexoedit">
              <option disabled value="">Por favor seleccione su sexo</option>
              <option>Masculino</option>
              <option>Femenino</option>
              <option>N/S</option>
          </select>
        </p>
    </fieldset>
    <br>
    <div class="divbutton">  
      <button @click="editarpersona()" class="btn btn-danger">Editar</button>
    </div>  
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

<style>
  .edicion{
    width: 100%;
  }
  label {
    color: red;
    padding: 1ch;
  }
</style>