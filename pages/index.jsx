import Layout from '/components/layout'
import ExternalLink from '/components/externalLink'
import Paragraph from '/components/paragraph'
import homeData from '../data/home'

export default function Home() {
    return (
        <Layout title="Léon Tran-Van">
            <div className="text-lg pb-12">
                I’m currently working as a{' '}
                <span className="font-serif italic text-xl">
                    front-end engineer
                </span>{' '}
                at{' '}
                <ExternalLink link="https://hager.com" text="Hager" size="18" />{' '}
                a leading supplier of solutions and services for electrical
                installations.
            </div>
            <div className="flex flex-col gap-12">
                {homeData.map((paragraph, i) => {
                    return (
                        <Paragraph
                            key={i}
                            title={paragraph.title}
                            text={paragraph.text}
                        />
                    )
                })}
            </div>
        </Layout>
    )
}
