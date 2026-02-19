const fs = require('fs');
let c = fs.readFileSync('frontend/lib/api.js', 'utf8');
const before = c.includes('await fetch`${API_BASE_URL}/users/me`, {');
c = c.split('await fetch`${API_BASE_URL}/users/me`, {').join('await fetch(`${API_BASE_URL}/users/me`, {');
const after = c.includes('await fetch(`${API_BASE_URL}/users/me`, {');
fs.writeFileSync('frontend/lib/api.js', c);
console.log('Had bug:', before, '| Fixed:', after);
