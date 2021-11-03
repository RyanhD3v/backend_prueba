import { getConnection, sql, queries } from "../database";

//Obtener comentarios
export const getComentarios = async (req, res) => {
    
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllComentarios);
        res.json(result.recordset);
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//Crear Comentarios
export const addComentario = async (req, res) => {

    const {
        comentario,
        id_personal,
        id_nota

    } = req.body;

    if (comentario == null || id_personal == null || id_nota == null) {
        return res.status(400).json({
            msg: 'Bad request. Please fill all fields'
        });
    }    

    try {
        const pool = await getConnection();
    
        await pool.request()
            .input("comentario", sql.Text, comentario)
            .input("id_personal", sql.Int, id_personal)
            .input("id_nota", sql.Int, id_nota)     
            .query(queries.newComentario);
    
        res.json({comentario, id_personal, id_nota})
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

//Actualizar o editar comentarios
export const updateComentario = async(req, res) => {

    const{ comentario } = req.body;
    const{ id_comentario } = req.params;
    if (comentario == null) {
        return res.status(400).json({
            msg: 'Bad request. Please fill all fields'
        });
    }

    try {
        const pool = await getConnection()
        await pool
            .request()
            .input("comentario", sql.Text, comentario)
            .input("id_comentario", sql.Int, id_comentario)
            .query(queries.updateComentarioById);
    
            res.json(`Se actualizo tu comentario`);
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//Eliminar comentarios
