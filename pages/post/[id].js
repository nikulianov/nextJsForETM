import { useRouter } from 'next/router'

export default function post() {
  const postId = useRouter()

return(
  <div>post {postId.query.id}</div>
)
}