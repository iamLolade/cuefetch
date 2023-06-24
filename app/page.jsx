import Feed from "@components/Feed"

function Home() {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Discover & Share
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center">Routinely-used Prompts</span>
            </h1>
            <p className="desc text-center">
                Cuefetch is an open source prompting tool for
                mordern world to discover, create and share creative prompts
            </p>

            {/* {Feed} */}
            <Feed />
        </section>
    )
}

export default Home