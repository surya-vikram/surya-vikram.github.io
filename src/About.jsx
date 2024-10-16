function About(){
    return (
        <section className="about-section p-4 min-h-[100vh] flex flex-col  items-center">
            <div className="about-container flex flex-col items-center mt-40 gap-y-20">
                <div className="sm:text-5xl text-3xl">
                    <h1 className="text-white">
                        <span className="bg-white text-black rounded-lg p-4 font-bold">ABOUT</span> ME
                    </h1>
                </div>
                <div>
                    <p className="w-3/4 sm:w-1/2 mx-auto text-white text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatem temporibus quidem quas impedit officia fugiat officiis, accusamus nostrum at libero optio necessitatibus! Unde quam eaque cupiditate distinctio repellat in?
                    </p>
                </div>
          </div>
        </section>
    )
}

export default About