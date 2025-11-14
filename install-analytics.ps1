# Script para adicionar Google Analytics e Microsoft Clarity em todas as páginas HTML
# Autor: Carlos Correia
# Data: 2025-11-14

$analyticsScript = '    
    <!-- Analytics: Google Analytics 4 + Microsoft Clarity -->
    <script src="analytics.js"></script>
'

# Lista de ficheiros HTML a processar (excluindo index.html e backup)
$htmlFiles = @(
    "cv-carlos-correia-en.html",
    "projetos_programacao.html",
    "projects-programming-en.html",
    "certificados_diplomas.html",
    "certificates-diplomas-en.html",
    "projetos_relatorios_academicos.html",
    "academic-reports-en.html",
    "projeto-space-defender.html",
    "projeto-gestor-futsal.html",
    "projeto-gestor-tarefas.html",
    "projeto-sistema-pizzaria.html",
    "projeto-quest4couple.html"
)

$updatedFiles = 0
$skippedFiles = 0

foreach ($file in $htmlFiles) {
    if (Test-Path $file) {
        Write-Host "Processando: $file" -ForegroundColor Cyan
        
        # Ler conteúdo do ficheiro
        $content = Get-Content $file -Raw -Encoding UTF8
        
        # Verificar se já tem o script de analytics
        if ($content -match 'analytics\.js') {
            Write-Host "  ⏭️  Já tem analytics - IGNORADO" -ForegroundColor Yellow
            $skippedFiles++
            continue
        }
        
        # Adicionar script após o </title>
        if ($content -match '(<title>.*?</title>)') {
            $newContent = $content -replace '(</title>)', "`$1`r`n$analyticsScript"
            
            # Guardar ficheiro com encoding UTF-8
            $newContent | Out-File -FilePath $file -Encoding UTF8 -NoNewline
            
            Write-Host "  ✅ Analytics adicionado com sucesso!" -ForegroundColor Green
            $updatedFiles++
        }
        else {
            Write-Host "  ❌ Erro: Não encontrou tag <title>" -ForegroundColor Red
        }
    }
    else {
        Write-Host "  ⚠️  Ficheiro não encontrado: $file" -ForegroundColor Yellow
    }
}

Write-Host "`n" -NoNewline
Write-Host "═══════════════════════════════════════" -ForegroundColor Magenta
Write-Host " 📊 RESUMO DA INSTALAÇÃO" -ForegroundColor Magenta
Write-Host "═══════════════════════════════════════" -ForegroundColor Magenta
Write-Host " ✅ Ficheiros atualizados: $updatedFiles" -ForegroundColor Green
Write-Host " ⏭️  Ficheiros ignorados: $skippedFiles" -ForegroundColor Yellow
Write-Host "═══════════════════════════════════════" -ForegroundColor Magenta
Write-Host ""
Write-Host "🎯 PRÓXIMO PASSO:" -ForegroundColor Cyan
Write-Host "   Edita o ficheiro 'analytics.js' e configura:"
Write-Host "   - Google Analytics ID (linha 4)"
Write-Host "   - Microsoft Clarity ID (linha 5)"
Write-Host ""
Write-Host "📖 Instruções completas em: ANALYTICS-SETUP.md" -ForegroundColor Green
Write-Host ""
