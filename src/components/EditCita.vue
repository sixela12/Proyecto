<template>
  <div class="form-container">
    <h2>Editar Cita</h2>
    <form @submit.prevent="updateCita" class="cita-form">
      <div class="form-group">
        <label>Fecha:</label>
        <input v-model="fecha" type="date" required />
      </div>
      <div class="form-group">
        <label>Hora:</label>
        <input v-model="hora" type="time" required />
      </div>
      <div class="form-group">
        <label>Médico ID:</label>
        <input v-model="medicoId" type="text" required />
      </div>
      <div class="form-group">
        <label>Paciente ID:</label>
        <input v-model="pacienteId" type="text" required />
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

const fecha = ref('')
const hora = ref('')
const medicoId = ref('')
const pacienteId = ref('')

const fetchCita = async () => {
  const response = await api.get(`/citas/${id}`)
  fecha.value = response.data.fecha
  hora.value = response.data.hora
  medicoId.value = response.data.medicoId
  pacienteId.value = response.data.pacienteId
}

const updateCita = async () => {
  const updatedCita = {
    fecha: fecha.value,
    hora: hora.value,
    medicoId: medicoId.value,
    pacienteId: pacienteId.value
  }
  await api.put(`/citas/${id}`, updatedCita)
  router.push('/citas')
}

onMounted(fetchCita)
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

.cita-form {
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
