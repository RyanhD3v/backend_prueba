
export const queries = {
    getAllPesonal: 'SELECT * FROM personal',
    //createNewProducts: 'INSERT INTO Products (name, description, quantity) VALUES (@name, @description, @quantity)',
    createNewPersonal:'INSERT INTO personal (ap_paterno, ap_materno, nombre, direccion, fecha_ingreso, tipo_usuario, estatus) VALUES (@ap_paterno, @ap_materno, @nombre, @direccion, @fecha_ingreso, @tipo_usuario, @estatus)',
    //getProductByCat: 'SELECT * FROM Products WHERE category = @category',
    getInternos:"SELECT nombre, ap_paterno, ap_materno, direccion, fecha_ingreso, estatus FROM personal WHERE tipo_usuario='INTERNO' ORDER BY nombre",
    getExternos: "SELECT nombre, ap_paterno, ap_materno, direccion, fecha_ingreso, estatus FROM personal WHERE tipo_usuario='EXTERNO' ORDER BY nombre" ,
    getPersonalById: 'SELECT * FROM personal WHERE id_personal = @id_personal',
    getRecentsAss:"SELECT TOP 10 name, category, assignedTo, dateAssignment FROM Products WHERE dateAssignment IS NOT NULL AND assignedTo != 'STOCK' ORDER BY dateAssignment DESC",
    deletePersonal: 'DELETE FROM personal WHERE id_personal = @id_personal',
    updatePersonalById: 'UPDATE personal SET ap_paterno = @ap_paterno, ap_materno = @ap_materno, nombre = @nombre, direccion = @direccion, fecha_ingreso = @fecha_ingreso, tipo_usuario = @tipo_usuario, estatus = @estatus WHERE id_personal = @id_personal',
    setAssign: "UPDATE Products SET status = 'ASSIGNED', assignedTo = @assignedTo, dateAssignment = @dateAssignment WHERE Id = @Id",

    getAllNotas: "SELECT * FROM nota",
    newNota:"INSERT INTO nota (nombre, descripcion, fecha_publicacion, estatus, id_personal) VALUES (@nombre, @descripcion, @fecha_publicacion, @estatus, @id_personal)"


};