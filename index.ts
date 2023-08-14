import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

function handler(_req) {
  // Create a response with html as its body.
  const response = new Response("<html> Hello Vikrant </html>", {
    status: 200,
    headers: {
      "content-type": "text/html",
    },
  });

  console.log(response.status); // 200
  console.log(response.headers.get("content-type")); // text/html

  return response;
}

serve(handler);