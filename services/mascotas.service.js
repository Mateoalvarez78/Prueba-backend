const mdb = require('./mdb.service')


const Mascotas = {
    
    todos: async function (){
        const sql = `
            SELECT * FROM mascotas
        `
        return mdb.query(sql, [])
    },

    mostrarMascotaPorId: function(todos) {

        const sql = `
            SELECT * FROM mascotas
            WHERE ID = ID
        `
       console.log(todos)
      return mdb.query(sql, [])
    },

    agregarMascota: function(mascota) {
        
        const sql = `
        INSERT INTO mascotas (Nombre, IdTipo, IdRaza, Edad, Pais, Ciudad)
        VALUES 
        (?, ?, ?, ?, ?, ?)
        `
        
        return mdb.query(sql, [mascota.Nombre, mascota.IdTipo, mascota.IdRaza ,mascota.Edad, mascota.Pais, mascota.Ciudad])
        
    },

    editar: function (mascota) {
        const sql = `
        UPDATE mascotas SET
        Nombre = ?,
        IdTipo = ?,
        IdRaza = ?,
        Edad = ?,
        Pais = ?,
        Ciudad = ?
        WHERE ID = ?
        `
        return mdb.query(sql, [mascota.Nombre, mascota.IdTipo, mascota.IdRaza ,mascota.Edad, mascota.Pais, mascota.Ciudad, mascota.ID])
    } 
    
}



module.exports = Mascotas