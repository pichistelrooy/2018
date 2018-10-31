<template>
  <bNav fill tabs pills class="alert alert-dark">
			<bNavItem><router-link to="/" class="btn btn-outline-success"> Index </router-link></bNavItem>
			<bNavItem><router-link to="/personas" class="btn btn-outline-success"> Agregar </router-link></bNavItem>
			<bNavItem><router-link to="/listado" class="btn btn-outline-success"> Listar </router-link></bNavItem>
			<bNavItem><router-link to="/buscarid" class="btn btn-outline-success"> Buscar Por ID </router-link></bNavItem>
  </bNav>
</template>

<script>
export default {
  name: 'Principal'
}
</script>