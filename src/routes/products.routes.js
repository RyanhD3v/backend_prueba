import { Router } from 'express'


import { createPersonal, getPersonal, getPersonaById, getPersonalInterno, getPersonalExterno, deletePersonalById, updatePersonal } from '../controllers/personal.controller';
import { createNota, getNotas } from '../controllers/nota.controller';
import { addComentario, getComentarios, updateComentario } from '../controllers/comentario.controller';

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

router.put('/notas/:id_nota', updatePersonal );

//Routes Comentarios
router.get('/comentarios', getComentarios);

router.post('/comentarios', addComentario);

router.put('/comentarios/:id_comentario', updateComentario );

export default router