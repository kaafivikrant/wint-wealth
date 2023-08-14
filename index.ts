import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

async function handler(req: Request): Promise<Response> {
    const resp = await fetch("https://api.wintwealth.com/products/all?userId=125811", {
      // The init object here has an headers object containing a
      // header that indicates what type of response we accept.
      // We're not specifying the method field since by default
      // fetch makes a GET request.
    headers: {
        "authority": "api.wintwealth.com",
        "accept": "*/*",
        "accept-language": "en-GB,en;q=0.9",
        "content-type": "application/json",
        "origin": "https://www.wintwealth.com",
        "referer": "https://www.wintwealth.com/",
        "sec-ch-ua": '"Not/A)Brand";v="99", "Brave";v="115", "Chromium";v="115"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "sec-gpc": "1",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome",
        "x-auth-token": "qDV2aGzfzAiRseHMbrNoGg"
    },
    });
    // Put the response in the variable
    // let data = await resp.json();
    // console.log(data);
    return new Response(resp.body, {
        status: resp.status,
        headers: {
        "content-type": "application/json",
        },
    });
}

serve(handler);