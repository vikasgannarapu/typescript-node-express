import { Request, Response } from 'express';

interface Person {
    firstName: string,
    lastName: string,
    clientId: string
}

export let hi = ( req: Request, res: Response ) => {
    res.send('hello');
}


export let v1Parse = (req: Request, res: Response ) => {

    let body = req.body;
    

    let v1Data: Person = {firstName: 'JOHN0000', lastName: 'MICHAEL000', clientId:'9994567' }
    res.json({
        statusCode: 200,
        data:  v1Data
    })
}

export let v2Parse = (req: Request, res: Response ) => {

    let body = req.body;

    let v2Data: Person = { firstName: 'JOHN', lastName: 'MICHAEL', clientId: '999-4567'  }
    res.json({
        statusCode: 200,
        data:  v2Data
    })   
}

