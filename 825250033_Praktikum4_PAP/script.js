function buatID() {
  const container = document.getElementById('container');
  
  // Mencegah pembuatan kartu ganda
  if (!document.getElementById('myCard')) {
    const card = document.createElement('div');
    card.id = 'myCard';
    card.className = 'id-card';
    card.innerHTML = `
      <p><b>NAMA :</b> Julia tjahaya</p>
      <p><b>NIM :</b> 825250033</p>
      <p><b>KELAS :</b> Sistem informasi / A</p>
    `;
    container.appendChild(card);
  }
}

function hapusID() {
  const card = document.getElementById('myCard');
  if (card) {
    card.remove();
  }
}