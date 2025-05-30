export function popularHorarios(turno, dia) {
  const horarioSelect = document.getElementById('horario');
  horarioSelect.innerHTML = '<option value="">Selecione o horário</option>';

  if (!turno || !dia) return;

  const horarios = ["Sexta", "Sábado"].includes(dia)
    ? turno === "Manhã"
      ? ["8h-10h", "10h-12h"]
      : ["14h-16h", "16h-18h"]
    : turno === "Manhã"
      ? ["8h", "9h", "10h", "11h"]
      : ["14h", "15h", "16h", "17h"];

  horarios.forEach(h => {
    const option = document.createElement("option");
    option.value = h;
    option.textContent = h;
    horarioSelect.appendChild(option);
  });
}
