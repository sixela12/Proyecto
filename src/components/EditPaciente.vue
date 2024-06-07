<template>
  <div class="form-container">
    <h2>Editar Paciente</h2>
    <form @submit.prevent="updatePaciente" class="paciente-form">
      <div class="form-group">
        <label>Nombre:</label>
        <input v-model="nombre" type="text" required />
      </div>
      <div class="form-group">
        <label>Edad:</label>
        <input v-model="edad" type="number" required />
      </div>
      <div class="form-group">
        <label>Teléfono:</label>
        <input v-model="telefono" type="text" required />
      </div>
      <button type="submit" class="submit-button">Actualizar</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import api from '../services/api'

const router = useRouter()
const route = useRoute()
const id = route.params.id

const nombre = ref('')
const edad = ref('')
const telefono = ref('')

const fetchPaciente = async () => {
  const response = await api.get(`/pacientes/${id}`)
  nombre.value = response.data.nombre
  edad.value = response.data.edad
  telefono.value = response.data.telefono
}

const updatePaciente = async () => {
  const updatedPaciente = {
    nombre: nombre.value,
    edad: edad.value,
    telefono: telefono.value
  }
  await api.put(`/pacientes/${id}`, updatedPaciente)
  router.push('/pacientes')
}

onMounted(fetchPaciente)
</script>

<style scoped>
.form-container {
  max-width: 400px;
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

.paciente-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  color: #555;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.submit-button {
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
