# 📊 Analytics Setup Guide

## ✅ O que foi implementado:

### 1. **Google Analytics 4 + Microsoft Clarity**
Foi criado o ficheiro `analytics.js` que inclui:
- ✅ Google Analytics 4 (GA4)
- ✅ Microsoft Clarity (gravações + heatmaps)
- ✅ Tracking automático de eventos personalizados
- ✅ Compliance com RGPD (anonymize_ip)

### 2. **Eventos Rastreados Automaticamente:**
- 📄 Visualizações de PDF
- ⬇️ Downloads de PDFs e certificados
- 🔗 Cliques em links externos
- 🌐 Mudança de idioma (PT ↔ EN)
- 📂 Navegação entre secções
- 🎯 Cliques em projetos específicos

---

## 🚀 Como Ativar (3 Passos Simples):

### **Passo 1: Criar Conta Google Analytics**
1. Acede a [analytics.google.com](https://analytics.google.com/)
2. Clica em "Start measuring"
3. Cria uma propriedade (Property)
4. Copia o **Measurement ID** (formato: `G-XXXXXXXXXX`)

### **Passo 2: Criar Conta Microsoft Clarity**
1. Acede a [clarity.microsoft.com](https://clarity.microsoft.com/)
2. Clica em "Sign in" (usa conta Microsoft gratuita)
3. Cria um novo projeto
4. Copia o **Project ID** (10 caracteres alfanuméricos)

### **Passo 3: Configurar IDs no Código**
Edita o ficheiro `analytics.js` (linhas 4 e 5):

```javascript
const GOOGLE_ANALYTICS_ID = 'G-1234567890';  // ← Substitui pelo teu ID do GA4
const MICROSOFT_CLARITY_ID = 'abc123def4';    // ← Substitui pelo teu ID do Clarity
```

---

## 📁 Ficheiros que Precisam do Script:

### ✅ **Já tem analytics.js incluído:**
- `cv-carlos-correia.html` ✅

### ⚠️ **Adicionar manualmente nas restantes páginas:**

Adiciona esta linha no `<head>` de cada ficheiro HTML, logo após o `<title>`:

```html
<title>Nome da Página</title>

<!-- Analytics: Google Analytics 4 + Microsoft Clarity -->
<script src="analytics.js"></script>

<style>
```

#### Lista de ficheiros a editar:
1. ✅ `cv-carlos-correia.html` (já feito)
2. ⚠️ `cv-carlos-correia-en.html`
3. ⚠️ `projetos_programacao.html`
4. ⚠️ `projects-programming-en.html`
5. ⚠️ `certificados_diplomas.html`
6. ⚠️ `certificates-diplomas-en.html`
7. ⚠️ `projetos_relatorios_academicos.html`
8. ⚠️ `academic-reports-en.html`
9. ⚠️ `projeto-space-defender.html`
10. ⚠️ `projeto-gestor-futsal.html`
11. ⚠️ `projeto-gestor-tarefas.html`
12. ⚠️ `projeto-sistema-pizzaria.html`
13. ⚠️ `projeto-quest4couple.html`

---

## 📊 Dados que Vais Obter:

### **Google Analytics:**
| Métrica | Exemplo |
|---------|---------|
| 👥 Visitantes únicos | 150 visitantes/mês |
| 📍 Localização | Porto (40%), Lisboa (25%), Brasil (20%) |
| 📱 Dispositivos | Desktop 60%, Mobile 35%, Tablet 5% |
| 🌐 Browsers | Chrome 65%, Firefox 20%, Safari 15% |
| ⏱️ Tempo médio | 3min 20s |
| 📄 Páginas mais vistas | CV (60%), Projetos (25%), Certificados (15%) |
| 🎯 Projetos mais clicados | Space Defender (40%), Gestor Tarefas (35%) |

### **Microsoft Clarity:**
- 🎥 **Gravações de sessões** - Vê como os visitantes navegam
- 🔥 **Heatmaps** - Onde clicam mais
- 📊 **Dead clicks** - Onde tentam clicar mas não funciona
- ⚡ **Scroll depth** - Até onde fazem scroll

---

## 🔍 Como Ver os Dados:

### **Google Analytics:**
1. Acede a [analytics.google.com](https://analytics.google.com/)
2. Seleciona a tua propriedade
3. Vai para "Reports" > "Realtime" (ver visitantes em tempo real)
4. Vai para "Reports" > "Engagement" > "Events" (ver eventos customizados)

### **Microsoft Clarity:**
1. Acede a [clarity.microsoft.com](https://clarity.microsoft.com/)
2. Seleciona o teu projeto
3. Vai para "Recordings" (ver gravações das sessões)
4. Vai para "Heatmaps" (ver onde clicam mais)

---

## 🎯 Eventos Customizados Disponíveis:

```javascript
// Rastrear visualização de PDF
trackPDFView('Certificado JAVA.pdf');

// Rastrear download
trackPDFDownload('CV 11.2025.pdf');

// Rastrear clique em projeto
trackProjectClick('Space Defender');

// Rastrear link externo
trackExternalLink('https://github.com/user', 'GitHub');

// Rastrear mudança de idioma
trackLanguageSwitch('PT', 'EN');
```

---

## ⚠️ Privacidade (RGPD):

✅ **Configuração implementada:**
- `anonymize_ip: true` - IPs anonimizados
- Sem cookies de terceiros invasivos
- Microsoft Clarity é compatível com RGPD

Podes adicionar um aviso de cookies simples se quiseres:
```html
<div class="cookie-notice">
  Este site usa Google Analytics e Microsoft Clarity para análise.
  <button onclick="this.parentElement.style.display='none'">OK</button>
</div>
```

---

## 🆘 Resolução de Problemas:

### **Não aparece nada no Google Analytics:**
- Espera 24-48h para os primeiros dados
- Verifica se o ID está correto em `analytics.js`
- Abre a consola do browser (F12) - deve ver "✅ Google Analytics 4 loaded"

### **Não aparece nada no Clarity:**
- Espera 1-2h para as primeiras gravações
- Verifica se o ID está correto
- Clarity demora mais tempo que o GA4

### **Consola mostra avisos:**
É normal ver avisos como:
```
⚠️ Google Analytics not configured. Get your ID at: https://analytics.google.com/
⚠️ Microsoft Clarity not configured. Get your ID at: https://clarity.microsoft.com/
```
Estes desaparecem quando configurares os IDs.

---

## 📧 Suporte:

- **Google Analytics:** [support.google.com/analytics](https://support.google.com/analytics)
- **Microsoft Clarity:** [docs.microsoft.com/clarity](https://docs.microsoft.com/en-us/clarity/)

---

**Feito! 🎉** Após configurar os IDs e adicionar o script em todas as páginas, terás estatísticas completas do teu portfólio!
