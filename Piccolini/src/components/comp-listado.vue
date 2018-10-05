<template>
    <fieldset>
        <legend> Seleccione el Sexo a Listar </legend>

        <p>
        <label for="sexolista">Sexo</label>
        <select name="sexolista" @input="sexChangedList" :value="sexolista" id="sexolista">
            <option disabled value="">Por favor seleccione el sexo</option>
            <option>Masculino</option>
            <option>Femenino</option>
            <option>N/S</option>
        </select>
        </p>

        <button @click="listar(sexolista)">Listar</button>
    </fieldset>
</template>

<script>
    export default {
    name: 'listado',
    props: {
        sexolista: String
    },
    methods: {
        sexChangedList(event) {
            this.$emit('sexolista', event.target.value);
        },
        listar(sexolista) {
            this.$emit('listar', sexolista);
        }
    }
}
</script>

<style>
    .listado{
        width: 100%;
     }
</style>