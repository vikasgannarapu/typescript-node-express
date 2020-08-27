"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.v2Parse = exports.v1Parse = exports.hi = void 0;
exports.hi = (req, res) => {
    res.send('hello');
};
exports.v1Parse = (req, res) => {
    let body = req.body;
    let v1Data = { firstName: 'JOHN0000', lastName: 'MICHAEL000', clientId: '9994567' };
    res.json({
        statusCode: 200,
        data: v1Data
    });
};
exports.v2Parse = (req, res) => {
    let body = req.body;
    let v2Data = { firstName: 'JOHN', lastName: 'MICHAEL', clientId: '999-4567' };
    res.json({
        statusCode: 200,
        data: v2Data
    });
};
//# sourceMappingURL=parser.js.map