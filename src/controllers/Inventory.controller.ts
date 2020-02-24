import { Request, Response } from 'express';
import Inventory from '../models/Inventory';
import Type from '../models/Type';
class InventoryController {
    
    public saveTool(req: Request, res: Response) {
        let body = req.body;
        


    }   
}

export const inventoryController = new InventoryController();