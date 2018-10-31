<template>
     <bCard bg-variant="dark" text-variant="white" border-variant="primary">
        <bCardHeader class="card text-white bg-primary mb-3"> Ingrese el ID </bCardHeader>
        <bCardBody style="max-width: 10rem;">

        <label for="id">ID</label>
        <bFormInput type="number" @input.native="idChanged" :value="id" id="id" 
            placeholder="Ingrese ID a Buscar" size="sm" style="max-width: 5rem;"></bFormInput>				
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