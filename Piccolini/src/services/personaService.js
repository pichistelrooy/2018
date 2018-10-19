let personas = []
let nextid = 0

function Persona(nombre, edad, sexo, id) {
  this.id = id,
  this.nombre = nombre,
  this.edad = edad,
  this.sexo = sexo
}

function mapper(array) {
  return array.map(object => new Persona(object.nombre, object.edad, object.sexo, object.id))
}

function getStorage() {
  if (window.localStorage.getItem('personas') != null) {
    personas = mapper(JSON.parse(window.localStorage.getItem('personas')))
    nextid = parseInt(window.localStorage.getItem('nextid'), 10)
  } else {
    personas = []
    nextid = 0
  }
}

function setStorage(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export default {
  getAll() {
    return JSON.parse(localStorage.getItem("personas")) || [];
  },

  getOne(id) {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          getStorage()
          const persona = personas.find(persona => persona.id == id)
          if (persona) {
            resolve(persona)
          } else {
            reject(`No existe la persona con el ID = ${id}`)
          }
        }, Math.random() * 2000 + 500)
    })
  },

  getBySex(sexo) {
    return new Promise((resolve, reject) => {
      try {
        const humano = this.getAll();

        setTimeout(() => {
          resolve(humano.filter(humano => humano.sexo === sexo));
        }, 2000);
      } catch(e) {
        reject(e.toString());
      }
    });
  },

  create(persona) {
    return new Promise((resolve) => {
      setTimeout(
        () => {
          getStorage()

          persona.id = ++nextid
          personas.push(persona)

          setStorage('personas', personas)
          setStorage('nextid', nextid)

          resolve('Success')
        }, Math.random() * 2000 + 500)
    })
  },

  update(persona) {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          getStorage()
          const key = personas.findIndex(humano => humano.id === persona.id)

          if (key > -1) {
            personas.splice(key, 1, persona)
            setStorage('personas', personas)

            resolve('Success')
          } else {
            reject(`No existe la persona con el ID = ${persona.id}`)
          }
        }, Math.random() * 2000 + 500)
    })
  },

  delete(id) {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          getStorage()
          const key = personas.findIndex(persona => persona.id === id)

          if (key > -1) {
            personas.splice(key, 1)
            setStorage('personas', personas)

            resolve('Success')
          } else {
            reject(`No existe la persona con el ID = ${id} `)
          }
        }, Math.random() * 2000 + 500)
    })
  },

}