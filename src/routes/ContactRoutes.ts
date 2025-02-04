import { Router } from 'express'
import { ContactController } from '../controllers/ContactController'
import { body, param } from 'express-validator'
import { handleInputErrors } from '../middleware/validation'
import { contactExist } from '../middleware/contact'

const router = Router()

router.param('contactId', contactExist)

router.post('/', 
    body('name')
        .notEmpty().withMessage('Digita tu nombre'),
    body('email')
        .notEmpty().withMessage('Digita tu Email')
        .isEmail().withMessage('Digite un Email válido'),
    body('phone')
        .notEmpty().withMessage('Digita tu número de teléfono')
        .isNumeric().withMessage('Debe ser un numero'),
    body('message')
        .notEmpty().withMessage('Ingresa un resumen de tu razón de contacto'),
    handleInputErrors,
    ContactController.createContact
)

router.get('/', ContactController.getAllContacts)

router.post('/:contactId/status', 
    param('contactId').isMongoId().withMessage('ID no valido'),
    ContactController.updateStatus
)

export default router