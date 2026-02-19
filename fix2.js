const fs=require('fs');const bt=String.fromCharCode(96);let c=fs.readFileSync('frontend/lib/api.js','utf8');const lines=c.split('
');lines[51]='  const response = await fetch('+bt+'${API_BASE_URL}/users/me'+bt+', {';fs.writeFileSync('frontend/lib/api.js',lines.join('
'));console.log('Fixed:',lines[51]);