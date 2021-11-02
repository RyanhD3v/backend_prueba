import { getConnection, sql, queries } from "../database";

//Obtener Personal
export const getPersonal = async (req, res) => {
    
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllPesonal);
        res.json(result.recordset);
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
//Obtener por Id
export const getPersonaById = async(req, res) => {
    const { id_personal } = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input('id_personal', id_personal)
        .query(queries.getPersonalById);
    
    res.send(result.recordset[0]);
};

//Obtener Personal Interno
export const getPersonalInterno = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getInternos);
        res.json(result.recordset);
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//Obtener Personal Externo
export const getPersonalExterno = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getExternos);
        res.json(result.recordset);
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

//Crear Persona
export const createPersonal = async (req, res) => {

    const {
        ap_paterno,
        ap_materno,
        nombre,
        direccion,
        fecha_ingreso,
        tipo_usuario,
        estatus
    } = req.body;

    if (nombre == null || fecha_ingreso == null) {
        return res.status(400).json({
            msg: 'Bad request. Please fill all fields'
        });
    }

    if (estatus === null) estatus = "ACTIVE";
    

    try {
        const pool = await getConnection();
    
        await pool.request()
            .input("ap_paterno", sql.VarChar, ap_paterno)
            .input("ap_materno", sql.VarChar, ap_materno)
            .input("nombre", sql.VarChar, nombre)
            .input("direccion", sql.Text, direccion)
            .input("fecha_ingreso", sql.DateTime, fecha_ingreso)
            .input("tipo_usuario", sql.VarChar, tipo_usuario)
            .input("estatus", sql.VarChar, estatus)

            
            
            //.input("nameCampo", sql.Int, campoEntero)
            
            .query(queries.createNewPersonal);
    
        res.json({ap_paterno, ap_materno, nombre, direccion, fecha_ingreso, tipo_usuario, estatus})
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};
//borrar Persona
export const deletePersonalById = async(req, res) => {
    const { id_personal } = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input('id_personal', id_personal)
        .query(queries.deletePersonal);
    
    res.sendStatus(204);
};

//Actualizar Persona
export const updatePersonalById = async(req, res) => {

    const{ ap_paterno, ap_materno, nombre, direccion, fecha_ingreso, tipo_usuario, estatus } = req.body;
    const{ id_personal } = req.params;
    if (ap_paterno == null || ap_materno == null, nombre == null, direccion === null, fecha_ingreso == null, tipo_usuario == null, estatus === null) {
        return res.status(400).json({
            msg: 'Bad request. Please fill all fields'
        });
    }

    const pool = await getConnection()
    await pool
        .request()
        .input("ap_paterno", sql.VarChar, ap_paterno)
        .input("ap_materno", sql.VarChar, ap_materno)
        .input("nombre", sql.VarChar, nombre)
        .input("direccion", sql.Text, direccion)
        .input("fecha_ingreso", sql.DateTime, fecha_ingreso)
        .input("tipo_usuario", sql.VarChar, tipo_usuario)
        .input("estatus", sql.VarChar, estatus)
        .input("id_personal", sql.Int, id_personal)
        .query(queries.updatePersonalById);

        res.json({ap_paterno, ap_materno, nombre, direccion, fecha_ingreso, tipo_usuario, estatus});
};

