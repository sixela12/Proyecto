<template>
  <div class="medicos-container">
    <h2>Lista de Médicos</h2>
    <ul class="medicos-list">
      <li v-for="medico in medicos" :key="medico.id" class="medico-item">
        <span>{{ medico.nombre }} - {{ medico.especialidad }} - {{ medico.telefono }}</span>
        <div class="medico-actions">
          <router-link :to="`/edit-medico/${medico.id}`" class="edit-link">Editar</router-link>
          <button @click="deleteMedico(medico.id)" class="delete-button">Eliminar</button>
        </div>
      </li>
    </ul>
    <router-link to="/add-medico" class="add-medico-link">Agregar Médico</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../services/api'

const medicos = ref([])

const fetchMedicos = async () => {
  const response = await api.get('/medicos')
  medicos.value = response.data
}

const deleteMedico = async (id) => {
  await api.delete(`/medicos/${id}`)
  fetchMedicos()
}

onMounted(fetchMedicos)
</script>

<style scoped>
.medicos-container {
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

.medicos-list {
  list-style-type: none;
  padding: 0;
}

.medico-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  margin-bottom: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.medico-item span {
  flex: 1;
}

.medico-actions {
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

.add-medico-link {
  display: block;
  text-align: center;
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #28a745;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
}

.add-medico-link:hover,
.edit-link:hover,
.delete-button:hover {
  opacity: 0.8;
}
</style>
