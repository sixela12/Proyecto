<template>
  <div class="pacientes-container">
    <h2>Lista de Pacientes</h2>
    <ul class="pacientes-list">
      <li v-for="paciente in pacientes" :key="paciente.id" class="paciente-item">
        <span>{{ paciente.nombre }} - {{ paciente.edad }} - {{ paciente.telefono }}</span>
        <div class="paciente-actions">
          <router-link :to="`/edit-paciente/${paciente.id}`" class="edit-link">Editar</router-link>
          <button @click="deletePaciente(paciente.id)" class="delete-button">Eliminar</button>
        </div>
      </li>
    </ul>
    <router-link to="/add-paciente" class="add-paciente-link">Agregar Paciente</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'

const pacientes = ref([])

const fetchPacientes = async () => {
  const response = await api.get('/pacientes')
  pacientes.value = response.data
}

const deletePaciente = async (id) => {
  await api.delete(`/pacientes/${id}`)
  fetchPacientes()
}

onMounted(fetchPacientes)
</script>

<style scoped>
.pacientes-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
}

.pacientes-list {
  list-style-type: none;
  padding: 0;
}

.paciente-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  margin-bottom: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.paciente-item span {
  flex: 1;
}

.paciente-actions {
  display: flex;
  gap: 10px;
}

.edit-link,
.delete-button {
  padding: 5px 10px;
  text-decoration: none;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.edit-link {
  background-color: #007bff;
}

.delete-button {
  background-color: #dc3545;
}

.add-paciente-link {
  display: block;
  text-align: center;
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #28a745;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
}

.add-paciente-link:hover,
.edit-link:hover,
.delete-button:hover {
  opacity: 0.8;
}
</style>
