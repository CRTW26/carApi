import api from './index'

const port = 3000;
api.listen(port, () => console.log(`Listening on port: ${port}`));