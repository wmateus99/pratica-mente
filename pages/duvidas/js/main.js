export function salvarResposta(e) {
  e.preventDefault();

  const resposta = {
    nome: document.getElementById('nome').value,
    curso: document.getElementById('curso').value,
    turno: document.getElementById('turno').value,
    dia: document.getElementById('dia').value,
    horario: document.getElementById('horario').value,
    duvida: document.getElementById('duvida').value,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  };

  db.collection('respostas').add(resposta)
    .then(() => {
      alert('Resposta enviada com sucesso!');
      e.target.reset();
    })
    .catch(error => {
      console.error('Erro ao enviar:', error);
      alert('Erro ao enviar resposta');
    });
}
