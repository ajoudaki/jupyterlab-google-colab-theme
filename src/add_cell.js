function NewDiv() {
  const text = document.createElement('button');
  text.textContent = '+ Text';
  const code = document.createElement('button');
  code.textContent = '+ Code';
  const cov = document.createElement('div');
  cov.appendChild(text);
  cov.appendChild(code);
  const line = document.createElement('div');
  cov.id = 'cov';
  line.id = 'line';
  const div = document.createElement('div');
  div.classList.add('h-line');
  div.appendChild(cov);
  div.appendChild(line);
  return div;
}

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      document.querySelectorAll('.jp-Cell').forEach(d => d.after(NewDiv()));
      resolve('resolved');
    }, 5000);
  });
}

async function addDivs() {
  await resolveAfter2Seconds();
}