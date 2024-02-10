import { google } from "googleapis"

export async function getGoogleSheetsData(range: string) {
  const auth = await google.auth.getClient({
    projectId: "pcrf-dinner",
    credentials: {
      type: "service_account",
      private_key: process.env.PRIVATE_KEY,
      client_email: process.env.CLIENT_SERVICE_ACCOUNT,
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
