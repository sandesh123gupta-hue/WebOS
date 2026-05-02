import { subjects } from './data.js';
const wrap = document.getElementById('subjects');
if (wrap) {
  wrap.innerHTML = subjects.map((s) => `
  <article class="card">
    <h3>${s.code}: ${s.name}</h3>
    <p>Syllabus layout prepared with dedicated chapter sections and note-link placeholders.</p>
    <div class="links">
      <a class="btn primary" href="subjects/${s.code}.html">Open Subject</a>
      <a class="btn ghost" href="#${s.code}">Quick Link</a>
    </div>
  </article>`).join('');
}
