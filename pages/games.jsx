import { useEffect, useState } from 'react'
import Layout from '/components/layout'
import { exchangeNpssoForCode, exchangeCodeForAccessToken } from 'psn-api'
import ExternalLink from '/components/externalLink'

export default function Games() {
    const [data, setData] = useState()
    useEffect(() => {
        const myNpsso =
            '71KcbSgldAyMMTsozjeK56NFV21GtxsBffWd1ZOxh21PJq7ZHv6pgzJg965Xu1Ot'

        // declare the async data fetching function
        const fetchData = async () => {
            const accessCode = await exchangeNpssoForCode(myNpsso)
            const authorization = await exchangeCodeForAccessToken(accessCode)

            const trophyTitlesResponse = await getUserTitles(
                { accessToken: authorization.accessToken },
                'me'
            )
            // set state with the result
            setData(trophyTitlesResponse)
            console.log(data)
        }

        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error)
    }, [])

    return (
        <Layout title="Games">
            <div className="flex flex-col gap-6 text-md mt-12">
                <p>
                    I'm an avid gamer since my childhood and I spent the last 20
                    years grinding every game that I touched. I finally placed
                    first in Europe on Call Of Duty: Black Ops 2 (e-sniping)
                    after few tournament wins.
                </p>
                <p>
                    Then, I took pleasure in playing alone against 4-5 good
                    players on Call Of Duty: Black Ops 3 (public matches). All
                    these games allowed me to perfect my game sense, mastering
                    every corners of the maps and play with timings in order to
                    outplay my oponents. You can watch some of my these matches
                    on{' '}
                    <ExternalLink link="youtube.com/ephalys" text="Youtube" /> .
                </p>
                <p>
                    Nowadays, I left the Call Of Duty licence to focus on
                    Battlefield. I arrived late but I managed to place among the
                    top players of the battlefield community. You can check my
                    stats{' '}
                    <ExternalLink
                        link="https://battlefieldtracker.com/bfv/profile/origin/ephalys/overview"
                        text="Here"
                    />{' '}
                    .
                </p>
                <p>
                    I'm also streaming on{' '}
                    <ExternalLink link="twitch.tv/ephalys" text="Twitch" /> time
                    to time.
                </p>
            </div>
        </Layout>
    )
}
