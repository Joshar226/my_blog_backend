import { Router } from 'express'
import { ContactController } from '../controllers/ContactController'
import { body, param } from 'express-validator'
import { handleInputErrors } from '../middleware/validation'

const router = Router()

router.post('/', 
    body('name')
        .notEmpty().withMessage('Digita tu nombre'),
    body('email')
        .notEmpty().withMessage('Digita tu Email')
        .isEmail().withMessage('Digite un Email válido'),
    body('phone')
        .notEmpty().withMessage('Digita tu número de teléfono'),
    body('message')
        .notEmpty().withMessage('Ingresa un resumen de tu razón de contacto'),
    handleInputErrors,
    ContactController.createContact
)

router.get('/', ContactController.getAllContacts)

router.delete('/:contactId', 
    param('contactId')
        .isMongoId().withMessage('ID no valido'),
    handleInputErrors
)

export default router