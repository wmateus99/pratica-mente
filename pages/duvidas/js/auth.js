export function validarSenhaProfessor(senha) {
  return senha === '123'; // Senha alterada para 123
}

export function agruparPorHorario(respostas) {
  const agrupado = {};
  respostas.forEach(res => {
    const chave = `${res.dia} - ${res.horario}`;
    if (!agrupado[chave]) agrupado[chave] = [];
    agrupado[chave].push(res);
  });
  return agrupado;
}

export function gerarHTMLRespostas(porHorario) {
  const container = document.createElement('div');

  Object.entries(porHorario).forEach(([horario, entradas]) => {
    const bloco = document.createElement('div');
    bloco.innerHTML = `<h3>${horario}</h3>`;

    entradas.forEach((ent, index) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <strong>Nome:</strong><span class="nomeSpan">${ent.nome}</span><br>
        <strong>Curso:</strong><span>${ent.curso}</span><br>
        <strong>Turno:</strong><span>${ent.turno}</span><br>
        <strong>Dia:</strong><span>${ent.dia}</span><br>
        <strong>Dúvida/Ferramenta:</strong><p> ${ent.duvida}</p><br>
        <button class="excluir" data-id="${ent.id}" data-nome="${ent.nome}">Excluir</button>
      `;
      bloco.appendChild(card);
    });

    container.appendChild(bloco);
  });

  return container;
}

