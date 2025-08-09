const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  const appId = Deno.env.get('ONESIGNAL_APP_ID') ?? '';

  return new Response(
    JSON.stringify({ appId }),
    { headers: { 'content-type': 'application/json', ...corsHeaders } }
  );
});
