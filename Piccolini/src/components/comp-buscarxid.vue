<template>
    <fieldset>
        <legend> Ingrese el ID</legend>

        <p>
          <label for="id">ID</label>
          <input type="number" @input="idChanged" :value="id" id="id" placeholder="Ingrese ID a Buscar">				
        </p>

        <button @click="buscarxid(id)" class="btn btn-danger">Buscar</button>
    </fieldset>
</template>

<script>
    export default {
    name: 'buscar',
    props: {
        id: 0
    },
    methods: {
        idChanged(event) {
            this.$emit('id', event.target.value);
        },
        buscarxid(id) {
            this.$emit('buscarxid', id);
        }
    }
}
</script>

<style>
    .buscarxid{
        width: 100%;
     }
</style>