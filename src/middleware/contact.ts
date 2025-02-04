import { Request, Response, NextFunction } from "express";
import Contact, { ContactType } from "../models/Contact";

declare global {
    namespace Express {
        interface Request {
            contact: ContactType
        }
    }
}

export async function contactExist(req: Request, res: Response, next: NextFunction) {
    try {
        const {contactId} = req.params
        const contact = await Contact.findById(contactId)
        if(!contact) {
            const error = new Error('Tarea no encontrada')
            res.status(404).json({error: error.message})
            return
        }
        req.contact = contact
        next() 
    } catch (error) {
        res.status(500).json({error: 'Hubo un error'})
    }
}