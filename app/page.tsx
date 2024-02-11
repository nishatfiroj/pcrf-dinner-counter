import { getGoogleSheetsData } from "./getGoogleSheetsData"
import Image from "next/image"
import olive from "../public/olive.png"

export default async function Page() {
  const posts = await getData()

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
      <Image
        priority
        src={olive}
        alt="olive tree"
        objectFit="cover"
        fill
        style={{
          position: "absolute",
          opacity: "40%",
          zIndex: 0,
        }}
      />

      <h1>Taste of Palestine</h1>
      <div style={{ display: "flex" }}>
        <h2>${totalDonationsCollected}</h2>
        <h2>{donationsProgress}%</h2>
      </div>
    </div>
  )
}

async function getData() {
  const range = `Sheet1!B2:B999`
  return await getGoogleSheetsData(range)
}
