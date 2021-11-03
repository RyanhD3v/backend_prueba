import { Router } from 'express'


import { createPersonal, getPersonal, getPersonaById, getPersonalInterno, getPersonalExterno, deletePersonalById, updatePersonal } from '../controllers/personal.controller';
import { createNota, deleteNota, getNotas, updateNota } from '../controllers/nota.controller';
import { addComentario, deleteComentario, getComentarios, updateComentario } from '../controllers/comentario.controller';

const router = Router();
//Routes Personal
router.get('/personal', getPersonal);

router.post('/personal', createPersonal);

router.get('/personal/interno', getPersonalInterno);

router.get('/personal/externo', getPersonalExterno);

router.get('/personal/:id_personal', getPersonaById);

router.put('/personal/:id_personal', updatePersonal );

router.delete('/personal/:id_personal', deletePersonalById );

//Routes Notas
router.get('/notas', getNotas);

router.post('/notas', createNota);

router.put('/notas/:id_nota', updateNota );

router.delete('/notas/:id_nota', deleteNota);

//Routes Comentarios
router.get('/comentarios', getComentarios);

router.post('/comentarios', addComentario);

router.put('/comentarios/:id_comentario', updateComentario );

router.delete('/comentarios/:id_comentario', deleteComentario);

export default router