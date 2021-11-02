#Instructions for Use

>npm run dev            Execute the application in developer mode, you can make modifications
>npm run build          for the compiled the code in the folder dist

#Routes Personal

GET
http://localhost:3000/personal
http://localhost:3000/personal/interno
http://localhost:3000/personal/externo

POST
http://localhost:3000/personal

#EXAMPLE JSON
{
    "ap_paterno":"paterno",
    "ap_materno":"Materno",
    "nombre":"Victor",
    "direccion":"aqui va la direccion",
    "fecha_ingreso":"2021-11-02",
    "tipo_usuario":"EXTERNO",
    "estatus":"ACTIVO"
}

#PUT

#DELETE


#Routes Notas

GET
http://localhost:3000/notas

POST
http://localhost:3000/notas

#EXAMPLE JSON

{
    "nombre":"Nueva Nota",
    "descripcion":"Esta es otra nota de ejemplo",
    "fecha_publicacion":"2021-11-01",
    "estatus":"ACTIVA",
    "id_personal":15
}