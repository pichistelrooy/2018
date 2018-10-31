<template>
    <section>
        <bCard bg-variant="dark" text-variant="white" border-variant="primary">
        <bCardHeader class="card text-white bg-primary mb-3"> Seleccione el sexo a Listar </bCardHeader>
        <bCardBody>	

            <label for="sexolista">Sexo</label>
            <select name="sexolista" @input="sexChangedList" :value="sexolista" id="sexolista" class="form-control">
                <option disabled value="">Por favor seleccione el sexo</option>
                <option>Masculino</option>
                <option>Femenino</option>
                <option>N/S</option>
            </select>
        </bCardBody>
        <bCardFooter>
            <bButton @click="listar(sexolista)" text-variant="white" variant="outline-primary">Listar</bButton>
        </bCardFooter>
        </bCard>    
    </section>
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