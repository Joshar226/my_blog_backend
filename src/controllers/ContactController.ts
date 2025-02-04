import { Request, Response } from "express"
import Contact from "../models/Contact"
import User from "../models/User"
import bcrypt from 'bcrypt'

export class ContactController {

    static createContact = async ( req: Request, res: Response) => {
        const contact = new Contact(req.body)
        try {
            await contact.save()
            res.send('Solicitud Enviada Correctamente')
        } catch (error) {
            console.log(error)
        }
    }

    static getAllContacts = async ( req: Request, res: Response) => {
        try {
            const contacts = await Contact.find()
            res.json(contacts)
        } catch (error) {
            console.log(error);
        }
    } 

    static updateStatus = async(req: Request, res: Response) => {
        try {
            req.contact.contacted = !req.contact.contacted
            await req.contact.save()
            res.send('Status Actualizado')
        } catch (error) {
            res.status(500).json({error: 'Hubo un error'})
        }
    }
}