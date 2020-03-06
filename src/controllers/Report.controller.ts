import { Request, Response } from 'express';
import Report from '../models/Report';
import Inventory from '../models/Inventory';

class ReportController {

    public getReport(req: Request, res: Response) {
        Report.find({})
              .populate('userId')
              .populate('inventoryId')
              .exec((err, reportDB) => {
                if(err)
                    return res.status(400).json({
                        ok: false,
                        reports: reportDB
                    });

                res.json({
                    ok: true,
                    reports: reportDB
                });
              });
    }

    public saveReport(req: Request, res: Response) {
        let body = req.body;

        const report = new Report({
            inventoryId: body.inventoryId,
            description: body.description 
        });{

        report.save((err, reportDB) => {
            if(err)
                return res.status(500).json({
                    ok: false,
                    err
                });

            res.json({
                ok : true,
                report: reportDB
            }); 
            });
        }
    }

    public updateState(req: Request, res: Response) {
        let id = req.body.inventoryId;
        let state = req.body.state;
      
        Inventory.findByIdAndUpdate(id, {state}, {new: true}, (err, InventorySave) => {
            if(err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                inventarios: InventorySave
            });
        });

    }


}

export const reportController = new ReportController();