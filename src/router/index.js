import { createRouter, createWebHistory } from 'vue-router';
import MedicosList from '../components/MedicosList.vue';
import AddMedico from '../components/AddMedico.vue';
import EditMedico from '../components/EditMedico.vue';
import PacientesList from '../components/PacientesList.vue';
import AddPaciente from '../components/AddPaciente.vue';
import EditPaciente from '../components/EditPaciente.vue';
import CitasList from '../components/CitasList.vue';
import AddCita from '../components/AddCita.vue';
import EditCita from '../components/EditCita.vue';

const routes = [
  { path: '/', component: MedicosList },
  { path: '/add-medico', component: AddMedico },
  { path: '/edit-medico/:id', component: EditMedico },
  { path: '/pacientes', component: PacientesList },
  { path: '/add-paciente', component: AddPaciente },
  { path: '/edit-paciente/:id', component: EditPaciente },
  { path: '/citas', component: CitasList },
  { path: '/add-cita', component: AddCita },
  { path: '/edit-cita/:id', component: EditCita }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
