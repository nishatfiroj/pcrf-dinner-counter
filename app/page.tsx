import { getGoogleSheetsData } from "./gsheets"
import Image from "next/image"
import olive from "../public/olive.png"

export default async function App() {
  const range = `Sheet1!B2:B999`
  const posts = await getGoogleSheetsData(range)

  let totalDonationsCollected = 0
  posts?.forEach((post: any) => (totalDonationsCollected += parseInt(post[0])))

  const donationsGoal = 15000

  const donationsProgress = Math.floor(
    (totalDonationsCollected / donationsGoal) * 100
  )

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        padding: "2em 1em",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <div>
        <Image
          priority
          src={olive}
          alt="olive tree"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            opacity: "40%",
            zIndex: 0,
          }}
        />
      </div>

      <h1>Taste of Palestine</h1>
      <h2>{donationsProgress}%</h2>
    </div>
  )
}
