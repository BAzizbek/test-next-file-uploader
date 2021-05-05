// dont need this file
import {useRouter} from 'next/router'


export default function File() {
  // to access the route, (.push, ==useHistory)
  const {query} = useRouter()
  console.log(query);
  return (
    <div>There should be some data about {query.id} file and download button</div>
  )
}
