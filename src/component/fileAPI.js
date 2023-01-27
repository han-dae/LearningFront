
import { apiClient } from "./apiClient";

export const uploadFile = async (file) => {
    const multer = require('multer');
    const upload = multer({ dest: 'uploads/' });
    app.post('/upload', upload.single('file'), (req, res) => {
        console.log(req.file);
    });
    try {
        const { data } = await apiClient.post('/upload', file);
        return data;
    }
    catch (e) {
        console.log(e);
    }
}