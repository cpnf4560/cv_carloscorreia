const fs = require('fs');
const pdf = require('pdf-parse');

const pdfPath = 'G:\\O meu disco\\Formação JAVA - Projetos\\CV\\CV Carlos Correia 11.2025.pdf';

async function extractPdfText() {
    try {
        const dataBuffer = fs.readFileSync(pdfPath);
        const data = await pdf(dataBuffer);
        
        console.log('Número de páginas:', data.numpages);
        console.log('Texto extraído:');
        console.log('='.repeat(50));
        console.log(data.text);
        console.log('='.repeat(50));
        
        // Salvar o texto extraído em um arquivo
        fs.writeFileSync('cv-text-extracted.txt', data.text, 'utf8');
        console.log('Texto salvo em cv-text-extracted.txt');
        
    } catch (error) {
        console.error('Erro ao extrair texto do PDF:', error);
    }
}

extractPdfText();
