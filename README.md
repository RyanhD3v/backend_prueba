# Instructions for Use

# -------> Requirements
    Node.Js LTS download here https://nodejs.org/es/
    

->from the console, go to the project folder and run the following commands

>npm install            --Install project dependencies

>npm run dev            --Execute the application in developer mode, you can make modifications
>
>npm run build          --for the compiled the code in the folder dist
>
>npm run start          --Execute the application fronm /dist folder

# Routes Personal

GET
http://localhost:3000/personal

http://localhost:3000/personal/interno

http://localhost:3000/personal/externo

POST
http://localhost:3000/personal

EXAMPLE JSON
{
    "ap_paterno":"paterno",
    "ap_materno":"Materno",
    "nombre":"Victor",
    "direccion":"aqui va la direccion",
    "fecha_ingreso":"2021-11-02",
    "tipo_usuario":"EXTERNO",
    "estatus":"ACTIVO"
}

PUT

remplaza "id_personal" por un numero id valido que ya este registrado 

http://localhost:3000/personal/id_personal

Example JSON
{
    "ap_paterno":"Barralez",
    "ap_materno":"Cortes",
    "nombre":"Hugo",
    "direccion":"aqui va la nueva direccion",
    "fecha_ingreso":"2021-11-02",
    "tipo_usuario":"EXTERNO",
    "estatus":"ACTIVO"
}

DELETE

remplaza "id_personal" por un numero id valido que ya este registrado 

http://localhost:3000/personal/id_personal


# Routes Notas

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

PUT

remplaza "id_nota" por un numero id valido que ya este registrado

http://localhost:3000/notas/id_nota

{
    "nombre":"Nota Actualizada",
    "descripcion":"Esta es una nota actualizada"
}

DELETE

remplaza "id_nota" por un numero id valido que ya este registrado

http://localhost:3000/notas/id_nota

# Routes Comentarios

GET
http://localhost:3000/comentarios

POST
http://localhost:3000/comentarios

EXAMPLE JSON

{
    "comentario":"Estoy agregando un nuevo comentario de prueba sobre una nota existente",
    "id_personal":"10",
    "id_nota":"100"
}

PUT

Reemplaza el "id_comentario" por un id valido registrado

http://localhost:3000/comentarios/id_comentario

EXAMPLE JSON

{
    "comentario":"se actualizo el comentario del id que colocaste como parametro"
}

DELETE

Reemplaza el "id_comentario" por un id valido registrado

http://localhost:3000/comentarios/id_comentario

