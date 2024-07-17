const NewsCard = ({ date, title, articleLink }) => {
  return (
    <div className="border-b border-[#676767] py-6">
      <p className="text-[#676767] text-base mb-2">{date}</p>
      <h2 className="text-white text-2xl mb-4">{title}</h2>
      <a href={articleLink} className="text-green-600 text-lg">Read Article</a>
    </div>
  );
};

const NewsSection = () => {
  return (
    <div className="bg-black text-white pt-[356px] pb-[173px] pl-[111px] pr-[158px] w-[864px]">
      <header className="flex gap-20 items-end mb-8">
        <h1 className="text-[40px] font-semibold">Latest News</h1>
        <a href="#" className="text-green-600 text-2xl font-medium">View All News</a>
      </header>
      <div className="space-y-8">
        <NewsCard
          date="Saturday, 27th May 2024"
          title="Keep residents informed about local waste management initiatives."
          articleLink="#"
        />
        <NewsCard
          date="Saturday, 27th May 2024"
          title="Updates on new recycling programs or changes in collection schedules"
          articleLink="#"
        />
      </div>
    </div>
  );
};

export default App;
