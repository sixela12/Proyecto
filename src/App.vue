<template>
  <div id="app">
    <nav>
      <router-link to="/">Medicos</router-link>
      <router-link to="/pacientes">Pacientes</router-link>
      <router-link to="/citas">Citas</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

nav {
  padding: 15px;
  background-color: #42b983;
}

nav a {
  font-weight: bold;
  color: white;
  padding: 15px;
  text-decoration: none;
}

nav a:hover {
  color: #ffae42;
}

@media (max-width: 600px) {
  nav a {
    display: block;
    margin: 5px 0;
  }
}
</style>
