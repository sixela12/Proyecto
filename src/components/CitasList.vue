<template>
  <div class="citas-container">
    <h2>Lista de Citas</h2>
    <ul class="citas-list">
      <li v-for="cita in citas" :key="cita.id" class="cita-item">
        <span>
          Fecha: {{ cita.fecha }} - Hora: {{ cita.hora }} - Médico ID: {{ cita.medicoId }} -
          Paciente ID: {{ cita.pacienteId }}
        </span>
        <div class="cita-actions">
          <router-link :to="`/edit-cita/${cita.id}`" class="edit-link">Editar</router-link>
          <button @click="deleteCita(cita.id)" class="delete-button">Eliminar</button>
        </div>
      </li>
    </ul>
    <router-link to="/add-cita" class="add-cita-link">Agregar Cita</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'

const citas = ref([])

const fetchCitas = async () => {
  const response = await api.get('/citas')
  citas.value = response.data
}

const deleteCita = async (id) => {
  await api.delete(`/citas/${id}`)
  fetchCitas()
}

onMounted(fetchCitas)
</script>

<style scoped>
.citas-container {
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

.citas-list {
  list-style-type: none;
  padding: 0;
}

.cita-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  margin-bottom: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.cita-item span {
  flex: 1;
}

.cita-actions {
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

.add-cita-link {
  display: block;
  text-align: center;
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #28a745;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
}

.add-cita-link:hover,
.edit-link:hover,
.delete-button:hover {
  opacity: 0.8;
}
</style>
