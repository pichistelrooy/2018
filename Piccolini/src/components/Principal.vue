<template>
  <nav>
    <table class="table table-dark">
			<thead>
				<tr>
					<th scope="col"><h1><router-link to="/" class="badge badge-primary"> Index </router-link></h1></th>
					<th scope="col"><h1><router-link to="/personas" class="badge badge-success"> Agregar </router-link></h1></th>
					<th scope="col"><h1><router-link to="/listado" class="badge badge-warning"> Listar </router-link></h1></th>
					<th scope="col"><h1><router-link to="/buscarid" class="badge badge-info"> Buscar Por ID </router-link></h1></th>
				</tr>
			</thead>
    </table>  
  </nav>
</template>

<script>
export default {
  name: 'Principal'
}
</script>