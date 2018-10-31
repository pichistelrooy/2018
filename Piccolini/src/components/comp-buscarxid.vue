<template>
     <bCard bg-variant="dark" text-variant="white" border-variant="primary">
        <bCardHeader class="card text-white bg-primary mb-3"> Ingrese el ID </bCardHeader>
        <bCardBody>

        <label for="id">ID</label>
        <input type="number" @input="idChanged" :value="id" id="id" 
            placeholder="Ingrese ID a Buscar" class="form-control">				

        </bCardBody>
        <bCardFooter>
          <bButton @click="buscarxid(id)" text-variant="white" variant="outline-danger">Buscar</bButton>
        </bCardFooter>
     </bCard>
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