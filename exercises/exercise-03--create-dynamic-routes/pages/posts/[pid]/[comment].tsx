import {useRouter} from 'next/router'

const Comment = () => {
    const router = useRouter()
    const query = router.query
    console.log (query)

    return <p>Hello world</p>

}

export default Comment