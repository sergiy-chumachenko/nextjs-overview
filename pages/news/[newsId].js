import {useRouter} from "next/router";

function DetailPage() {
    const router = useRouter();

    const newsId = router.query.newsId;
    // send a request to backend API using newsId
    return (
        <h1>The DetailPage Page</h1>
    )
}

export default DetailPage;