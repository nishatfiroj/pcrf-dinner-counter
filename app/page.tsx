import { getGoogleSheetsData } from "./gsheets"

export default async function App() {
  const range = `Sheet1!C2:C999`
  const posts = await getGoogleSheetsData(range)

  let sum = 0
  posts?.forEach((post) => (sum += parseInt(post[0])))

  return (
    <div>
      <h1>Taste of Palestine </h1>
    </div>
  )
}
