import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { message } = await req.json();
    const msg = message.toLowerCase();

      let reply = "Got it. I’m keeping things simple here.";

        if (/^(hi|hello|hey)/.test(msg)) {
            reply = "Hey there! I’m your free AI chat.";
              } else if (/weather|rain|sunny/.test(msg)) {
                  reply = "I don’t have live weather yet, but it’s always a good day to build something!";
                    } else if (/help|features/.test(msg)) {
                        reply = "I can greet you, chat about weather, and keep history. Replace me with a real AI API anytime.";
                          }

                            return NextResponse.json({ reply });
                            }