
export const queries = {

    //Queryes for Personal
    getAllPesonal: "SELECT * FROM personal WHERE estatus='ACTIVO'",
    getInternos:"SELECT nombre, ap_paterno, ap_materno, direccion, fecha_ingreso, estatus FROM personal WHERE tipo_usuario='INTERNO' ORDER BY nombre",
    getExternos: "SELECT nombre, ap_paterno, ap_materno, direccion, fecha_ingreso, estatus FROM personal WHERE tipo_usuario='EXTERNO' ORDER BY nombre" ,
    getPersonalById: 'SELECT * FROM personal WHERE id_personal = @id_personal',
    createNewPersonal:'INSERT INTO personal (ap_paterno, ap_materno, nombre, direccion, fecha_ingreso, tipo_usuario, estatus) VALUES (@ap_paterno, @ap_materno, @nombre, @direccion, @fecha_ingreso, @tipo_usuario, @estatus)',
    updatePersonalById: "UPDATE personal SET ap_paterno = @ap_paterno, ap_materno = @ap_materno, nombre = @nombre, direccion = @direccion, fecha_ingreso = @fecha_ingreso, tipo_usuario = @tipo_usuario, estatus = @estatus WHERE id_personal = @id_personal",
    deletePersonal: "UPDATE personal SET estatus = 'INACTIVO' WHERE id_personal = @id_personal",
    
    //Queryes for Notas
    getAllNotas: "SELECT * FROM nota WHERE estatus='ACTIVA'",
    newNota:"INSERT INTO nota (nombre, descripcion, fecha_publicacion, estatus, id_personal) VALUES (@nombre, @descripcion, @fecha_publicacion, @estatus, @id_personal)",
    updateNotaById:"UPDATE nota SET nombre = @nombre, descripcion = @descripcion WHERE id_nota = @id_nota ",
    deleteNotaById:"UPDATE nota SET estatus = 'INACTIVA' WHERE id_nota = @id_nota",

    //Queryes for Comentarios
    getAllComentarios:"SELECT * FROM comentario",
    newComentario:"INSERT INTO comentario (comentario, id_personal, id_nota) VALUES (@comentario, @id_personal, @id_nota)",
    updateComentarioById:"UPDATE comentario SET comentario = @comentario WHERE id_comentario = @id_comentario",
    deleteComentarioById:"DELETE FROM comentario WHERE id_comentario = @id_comentario"

};