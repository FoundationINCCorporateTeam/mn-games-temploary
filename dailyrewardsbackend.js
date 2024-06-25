const supabase = require('@supabase/supabase-js');

exports.handler = async (req, res) => {
  const { userId } = JSON.parse(req.body);

  // Initialize Supabase client (replace with your connection details)
  const supabaseUrl = 'https://tdsxayxnjomnoiestnmj.supabase.co';
  const supabaseAnonKey = 'https://tdsxayxnjomnoiestnmj.supabase.co';
  const supabase = supabase.createClient(supabaseUrl, supabaseAnonKey);

  // Check user's last claim date from the database
  const { data, error } = await supabase
    .from('user_rewards')
    .select('last_claimed_date')
    .eq('user_id', userId)
    .single();

  if (error) {
    return res.status(500).json({ error: 'Failed to check claim history' });
  }

  const today = new Date();

  // Implement claim logic based on last claim date (replace with your logic)
  let canClaim = false;
  if (!data) { // No claim history, allow first claim
    canClaim = true;
  } else if (data.last_claimed_date.getDate() !== today.getDate()) {
    canClaim = true; // Can claim if last claim on different day
  }

  if (!canClaim) {
    return res.status(400).json({ error: 'You already claimed today' });
  }

  // Determine reward (replace with your logic, e.g., based on day of week)
  const reward = '100 Coins'; // Example reward

  // Update user's last claim date in the database
  const { updateError } = await supabase
    .from('user_rewards')
    .update({ last_claimed_date: today.toISOString() })
    .eq('user_id', userId);

  if (updateError) {
    return res.status(500).json({ error: 'Failed to update claim date' });
  }

  return res.json({ reward });
};
