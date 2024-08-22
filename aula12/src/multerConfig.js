// multerConfig.js

const multer = require('multer');


// Função para filtrar tipos de arquivos
const fileFilter = (req, file, cb) => {
    // Tipos de arquivos permitidos
    const allowedMimeTypes = [
        'text/csv',           // CSV
        'image/jpeg',         // JPG
        'application/pdf'     // PDF
    ];
    try {
        // Verifica se o tipo do arquivo é permitido
        if (allowedMimeTypes.includes(file.mimetype)) {
            cb(null, true); // Aceitar o arquivo
        } else {
            // Se o tipo de arquivo não for permitido, lançar um erro
            throw new Error('Tipo de arquivo não permitido. Apenas arquivos JPG, CSV e PDF são aceitos.');
        }
    } catch (error) {
        // Captura o erro e passa para o callback do Multer
        cb(error, false); // Rejeitar o arquivo
    }
};

// Configurar o destino e o nome do arquivo
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // O diretório onde os arquivos serão salvos
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Nome do arquivo
    }
});

// Configurar a instância do Multer
const upload = multer({ 
    storage: storage,
    fileFilter: fileFilter // Adicionar o fileFilter à configuração
 });

module.exports = upload; // Exportar a instância do Multer para uso em outros arquivos
