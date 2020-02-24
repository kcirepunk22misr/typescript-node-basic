import { Request, Response } from 'express';
import Type from '../models/Type';
import Group from '../models/Group';
import Marca from '../models/Marca';

class PropertiesController {
    
    public getTypes(req: Request, res: Response) {
        Type.find({})
            .exec((err, typeDB) => {
                if(err) return res.status(400).json({
                    ok: false,
                    message: 'Error al buscar los tipos de herramientas',
                    err
                });

                res.json({
                    ok: true,
                    types: typeDB
                })
            });
    }

    public saveType(req: Request, res: Response) {
        let name = req.body.name;
        const type = new Type({
            name
        });

        type.save((err, typeDB) => {
            if(err) return res.status(400).json({
                ok: false,
                message: 'Error al crear tipos de herramientas',
                err
            });

            res.status(201).json({
                ok: true,
                message: 'Tipo Guardado exitosamente',
                type: typeDB
            });
        });
    }

    public getGroup(req: Request, res: Response) {
        Group.find({})
        .exec((err, typeDB) => {
            if(err) return res.status(400).json({
                ok: false,
                message: 'Error al buscar los grupos de herramientas',
                err
            });

            res.json({
                ok: true,
                types: typeDB
            })
        });
    }

    public saveGroup(req: Request, res: Response) {  
        let name = req.body.name;
        const grupo = new Group({
            name
        });

        grupo.save((err, groupDB) => {
            if(err) return res.status(400).json({
                ok: false,
                message: 'Error al crear grupo de herramientas',
                err
            });

            res.status(201).json({
                ok: true,
                message: 'Grupo Guardado exitosamente',
                group: groupDB
            });
        });
    }

    public getMarcas(req: Request, res: Response) {
        Marca.find({})
        .exec((err, typeDB) => {
            if(err) return res.status(400).json({
                ok: false,
                message: 'Error al buscar las marcas de herramientas',
                err
            });

            res.json({
                ok: true,
                types: typeDB
            })
        });
    }

    public saveMarca(req: Request, res: Response) {
        let name = req.body.name;
        const marca = new Marca({
            name
        });

        marca.save((err, marcaDB) => {
            if(err) return res.status(400).json({
                ok: false,
                message: 'Error al crear grupo de herramientas',
                err
            });

            res.status(201).json({
                ok: true,
                message: 'Grupo Guardado exitosamente',
                marca: marcaDB
            });
        });
    }

}

export const propertiesController = new PropertiesController();