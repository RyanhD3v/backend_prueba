import { Router } from 'express'


import { createPersonal, getPersonal, getPersonaById, getPersonalInterno, getPersonalExterno, updatePersonalById, deletePersonalById } from '../controllers/personal.controller';
import { createNota, getNotas } from '../controllers/nota.controller';

const router = Router();

router.get('/personal', getPersonal);

router.post('/personal', createPersonal);

router.get('/personal/interno', getPersonalInterno);

router.get('/personal/externo', getPersonalExterno);

router.get('/personal/:id', getPersonaById);

router.put('/personal/:id', updatePersonalById );

router.delete('/personal/:id', deletePersonalById );


router.get('/notas', getNotas);

router.post('/notas', createNota);

export default router