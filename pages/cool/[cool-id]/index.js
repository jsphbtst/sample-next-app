import { useRouter } from 'next/router'

const CoolID = () => {
  const router = useRouter()
  const coolId = router.query['cool-id']
  return (
    <div>
      <h1>{coolId}</h1>
    </div>
  )
}

export default CoolID
