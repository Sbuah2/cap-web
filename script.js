const SUPABASE_URL = 'https://bspnujyvwliymghabrcq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.getElementById('message-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !message) return;

  const { error } = await supabaseClient
    .from('messages')
    .insert([{ name, message }]);

  if (error) {
    alert('Gagal mengirim pesan.');
  } else {
    alert('Pesan berhasil dikirim!');
    document.getElementById('message-form').reset();
    loadMessages();
  }
});

async function loadMessages() {
  const { data } = await supabaseClient
    .from('messages')
    .select('*')
    .order('created_at', { ascending: false });

  const messageList = document.getElementById('message-list');
  messageList.innerHTML = data.map(msg => `
    <p><strong>${msg.name}:</strong> ${msg.message}</p>
  `).join('');
}

loadMessages();