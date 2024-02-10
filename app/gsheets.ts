import { google } from "googleapis"

export async function getGoogleSheetsData(range: string) {
  const auth = await google.auth.getClient({
    projectId: "pcrf-dinner",
    credentials: {
      type: "service_account",
      project_id: "pcrf-dinner",
      private_key_id: process.env.PRIVATE_KEY_ID,
      private_key: process.env.PRIVATE_KEY?.split(String.raw`\n`).join("\n"),
      client_email: process.env.CLIENT_EMAIL,
      client_id: process.env.CLIENT_ID,
      token_url: "https://oauth2.googleapis.com/token",
      universe_domain: "googleapis.com",
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  })

  const sheets = google.sheets({ version: "v4", auth })

  const data = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: range,
  })

  return data.data.values
}
