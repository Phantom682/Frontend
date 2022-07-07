function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  return (
    <div className="footer">
      <p>
        This site is designed, developed & hosted by National Informatics
        Centre, Ministry of Electronics & IT (MeitY), Government of India and
        Content owned by Department of Administrative Reforms & Public
        Grievances
      </p>
      <p>Copyright © {year}</p>
    </div>
  );
}

export default Footer;
