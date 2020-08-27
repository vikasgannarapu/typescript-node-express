import app from './app';

const server = app.listen(app.get('port'), () => {
    console.log('app is running at', app.get('port'))
})


export default server;