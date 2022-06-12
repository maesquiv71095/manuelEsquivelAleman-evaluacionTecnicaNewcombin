<template>
    <div id="table-users">
        <table class="table table-bordered">
            <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>SSN</th>
            </thead>
            <tbody v-if="usuarios.length > 0">
                <tr v-for="(usuario,index) in usuarios" :key="usuario.ssn + index">
                    <td>{{ usuario.firstName }}</td>
                    <td>{{ usuario.lastName }}</td>
                    <td>{{ usuario.address }}</td>
                    <td style="font-weight: bold;">{{ usuario.ssn }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: 'TableUsers',
  props: {
    usuarios: {
        type: Array,
        default: () => []
    },
  },
}
</script>
<style scoped>
.table {
    border-collapse: collapse;
    width: 100%;
}

.table td,
.table th {
    padding: 0.3em 1em 0.3em 1em;
    text-align: center;
    font-size: 0.9em;
}

.table td {
    background-color: #fff;
}

.table-bordered th,
.table-bordered td {
    border: 1px solid #ddd;
}

.table th {
    background: var(--container-gray-bg-color);
}
</style>