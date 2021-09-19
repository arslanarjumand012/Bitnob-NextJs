import Head from 'next/head'
import React from 'react'

const Page = ({ title, children }) => (
    <React.Fragment>
        <Head>
            <title>
                {title}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </title>
        </Head>
        <React.Fragment>
            {children}
        </React.Fragment>
    </React.Fragment>
)

export default Page