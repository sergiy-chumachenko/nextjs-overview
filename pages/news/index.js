import {Fragment} from "react";
import Link from 'next/link'

function NewsPage() {
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li>
                    <Link href="/news/next-js-is-great">
                        NextJS is a Great!
                    </Link>
                </li>
                <li>Python is a Awesome!</li>
            </ul>
        </Fragment>
    )
}

export default NewsPage;