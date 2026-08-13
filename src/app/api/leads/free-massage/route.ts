type LeadPayload = {
  name?: unknown;
  phone?: unknown;
  website?: unknown;
  pageUrl?: unknown;
};

const ghlApiUrl = "https://services.leadconnectorhq.com";
const ghlLocationId = "yliDf7PQugc2DFZXUCj0";
const leadTag = "free-massage-ad";

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function normalizePhone(value: string) {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  if (digits.length >= 10 && digits.length <= 15) return `+${digits}`;
  return null;
}

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return Response.json({ message: "Please check the form and try again." }, { status: 400 });
  }

  if (cleanText(payload.website, 200)) {
    return Response.json({ ok: true });
  }

  const name = cleanText(payload.name, 100);
  const phone = cleanText(payload.phone, 30);
  const normalizedPhone = normalizePhone(phone);
  if (name.length < 2) {
    return Response.json({ message: "Please enter your name." }, { status: 400 });
  }

  if (!normalizedPhone) {
    return Response.json({ message: "Please enter a valid phone number." }, { status: 400 });
  }

  const token = process.env.GHL_SCHRAEDEL_PRIVATE_INTEGRATION_TOKEN;

  if (!token) {
    return Response.json(
      {
        message:
          "This preview form is not connected yet. Please call (385) 382-4453 for now.",
      },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(`${ghlApiUrl}/contacts/upsert`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Version: "2021-07-28",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        locationId: ghlLocationId,
        name,
        phone: normalizedPhone,
        source: "Schraedel Free Massage Ad",
        tags: [leadTag, "website-lead"],
        customFields: [],
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      return Response.json(
        { message: "We could not send your request. Please call (385) 382-4453." },
        { status: 502 },
      );
    }

    const result = (await response.json()) as { contact?: { id?: string }; id?: string };
    const contactId = result.contact?.id || result.id;

    if (!contactId) {
      return Response.json(
        { message: "We could not send your request. Please call (385) 382-4453." },
        { status: 502 },
      );
    }

    // Re-apply the campaign tag explicitly so an existing contact keeps the
    // attribution even if the location's duplicate-contact settings merge it.
    const tagResponse = await fetch(`${ghlApiUrl}/contacts/${contactId}/tags`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Version: "2021-07-28",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ tags: [leadTag, "website-lead"] }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    if (!tagResponse.ok) {
      return Response.json(
        { message: "We could not send your request. Please call (385) 382-4453." },
        { status: 502 },
      );
    }
  } catch {
    return Response.json(
      { message: "We could not send your request. Please call (385) 382-4453." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
