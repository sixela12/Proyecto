<template>
  <div>
    <h2>Agregar Cita</h2>
    <form @submit.prevent="addCita">
      <div>
        <label>Fecha:</label>
        <input v-model="fecha" type="date" required />
      </div>
      <div>
        <label>Hora:</label>
        <input v-model="hora" type="time" required />
      </div>
      <div>
        <label>Médico ID:</label>
        <input v-model="medicoId" type="text" required />
      </div>
      <div>
        <label>Paciente ID:</label>
        <input v-model="pacienteId" type="text" required />
      </div>
      <button type="submit">Agregar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import api from '../services/api';

const router = useRouter();

const fecha = ref('');
const hora = ref('');
const medicoId = ref('');
const pacienteId = ref('');

const addCita = async () => {
  const newCita = {
    fecha: fecha.value,
    hora: hora.value,
    medicoId: medicoId.value,
    pacienteId: pacienteId.value
  };
  await api.post('/citas', newCita);
  router.push('/citas');
};
</script>
