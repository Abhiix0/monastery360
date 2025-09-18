import { useEffect, useState } from "react"
import { getAllMonasteries } from "../../monasteries"

export default function Monasteries() {
  const [monasteries, setMonasteries] = useState<any[]>([])

  useEffect(() => {
    (async () => {
      const { data, error } = await getAllMonasteries()
      if (error) console.error(error)
      else setMonasteries(data ?? [])
    })()
  }, [])

  return (
    <div>
      {monasteries.map((m: any) => (
        <div key={m.id}>
          <h2>{m.name}</h2>
          <p>{m.description}</p>
        </div>
      ))}
    </div>
  )
}
