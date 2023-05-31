import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Amarjeet KUMAR",
      title: "Software Developer",
      img:
        "https://scontent.famd5-3.fna.fbcdn.net/v/t39.30808-6/324414308_1384650552073451_3670406986171752735_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=YTpwXvKsGP8AX_fOKgi&_nc_ht=scontent.famd5-3.fna&oh=00_AfDY0cn1NXP9wIcJ0z39D6hF-iUS5jllFevDdnW7wYouMA&oe=647C127A",
      icon: "assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Amarjeet kumar",
      title: "Co-Founder of RSAP4YOU",
      img:
        "https://scontent.famd5-1.fna.fbcdn.net/v/t1.6435-9/69810318_106483504074684_5580960244785217536_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=uTWWOljeQ1wAX8XiBP7&_nc_ht=scontent.famd5-1.fna&oh=00_AfBRBwca0MNMZ5WcuQ235Rz5FNT_uuZP5DQN2MBu4W-e4w&oe=649E7B83",
      icon: "assets/youtube.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Amarjeet kumar",
      title: "CEO of RSAP4YOU",
      img:
        "https://scontent.famd5-2.fna.fbcdn.net/v/t39.30808-6/289081011_843661333690227_3241906799274896050_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=L0r5QRZmIYQAX8NHlUW&_nc_ht=scontent.famd5-2.fna&oh=00_AfDCGqY1TzCug1Ymyd_aOmXmezmRIexuSrjB27qCxMQGvg&oe=647B6938",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
