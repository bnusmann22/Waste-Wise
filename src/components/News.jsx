import React from "react";

const NewsCard1 = () => {
  return (
    <article className="border-b border-[#676767] py-6">
      <p className="text-[#676767] text-base mb-2">Saturday, 27th May 2024</p>
      <h2 className="text-white text-2xl mb-4">Keep residents informed about local waste management initiatives.</h2>
      <a href="/articles/1" className="text-green-600 text-lg">Read Article</a>
    </article>
  );
};

const NewsCard2 = () => {
  return (
    <article className="border-b border-[#676767] py-6">
      <p className="text-[#676767] text-base mb-2">Saturday, 27th May 2024</p>
      <h2 className="text-white text-2xl mb-4">Updates on new recycling programs or changes in collection schedules.</h2>
      <a href="/articles/2" className="text-green-600 text-lg">Read Article</a>
    </article>
  );
};

const NewsSection = () => {
  return (
    <section className="bg-black text-white pt-[356px] pb-[173px] pl-[111px] pr-[158px] w-[864px]">
      <header className="flex gap-20 items-end mb-8">
        <h1 className="text-[40px] font-semibold">Latest News</h1>
        <a href="/news" className="text-green-600 text-2xl font-medium">View All News</a>
      </header>
      <div className="space-y-8">
        <NewsCard1 />
        <NewsCard2 />
      </div>
    </section>
  );
};

export default NewsSection;
