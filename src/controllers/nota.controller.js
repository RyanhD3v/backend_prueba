import { getConnection, sql, queries } from "../database";

//Crear Nueva Nota

export const createNota = async (req, res) => {

    const {
        nombre,
        descripcion,
        fecha_publicacion,
        estatus,
        id_personal

    } = req.body;

    if (nombre == null || id_personal == null) {
        return res.status(400).json({
            msg: 'Bad request. Please fill all fields'
        });
    }

    if (estatus === null) estatus = "ACTIVE";
    

    try {
        const pool = await getConnection();
    
        await pool.request()
            .input("nombre", sql.VarChar, nombre)
            .input("descripcion", sql.Text, descripcion)
            .input("fecha_publicacion", sql.DateTime, fecha_publicacion)
            .input("estatus", sql.VarChar, estatus)
            .input("id_personal", sql.Int, id_personal)     
            .query(queries.newNota);
    
        res.json({nombre, descripcion, fecha_publicacion, id_personal})
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};
//Consultar Notas
export const getNotas = async (req, res) => {
    
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllNotas);
        res.json(result.recordset);
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
//Actualizar Nota
export const updateNota = async(req, res) => {

    const{nombre, descripcion } = req.body;
    const{ id_nota } = req.params;
    if (nombre == null, descripcion === null) {
        return res.status(400).json({
            msg: 'Bad request. Update name and description'
        });
    }

    try {
        const pool = await getConnection()
        await pool
            .request()
            .input("nombre", sql.VarChar, nombre)
            .input("descripcion", sql.Text, descripcion)
            .input("id_nota", sql.Int, id_nota)
            .query(queries.updateNotaById);
    
            res.json(`Se actualizo la nota`);
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//Eliminar Nota

export const deleteNota = async(req, res) => {

    const{ id_nota } = req.params;
    if (id_nota == null) {
        return res.status(400).json({
            msg: 'Bad request. add an Id'
        });
    }

    try {
        const pool = await getConnection()
        await pool
            .request()
            .input("id_nota", sql.Int, id_nota)
            .query(queries.deleteNotaById);
    
            res.json(`Se elimino la nota`);
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};