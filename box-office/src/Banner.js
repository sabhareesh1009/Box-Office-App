import React from "react";
import "./Banner.css";

function Banner() {
  function truncate(string, n) {
    console.log(string?.length, "dfghjk");
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUVFRUVFxcXFRUVFRUXFhUVFRcYHSggGB0lHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDg8PDisZFR0rLS0rKysrKysrKys3NzcrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAaAAEBAQEAAwAAAAAAAAAAAAAAAQIDBQYH/8QAMBABAQEBAAAACwUJAAAAAAAAAAERAgMHEhchMUFUk+LwIjIzYdIEBQYTFBY0U4H/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APiVCoACgAoIuACgAAsBFAFQigWIuAJihgIY0AzgtAZFTABUAEACiYAAAAA3xGG+IDFRagKAAACgALoASqmLgCwjQMquGAhigGIuLgIlUwERQETVwwGcFwBEUBEUBAAAQFa4Za4BmhQAAFwAFQUBYiwFipKoCyEiwEWKYAmL9fWrAZxcaxMBMFQEqY1iWAmIoDKLUoIjSAIqAgoCAAN8MN8AxUarIKCgAAokWANRFgDURcBYCyAKSLgJKGNYCYYoDNUsSAiY0AmM1pKDKNWM0EqLiYAi4lBFAEFQBrllrkE6QoBio0CEAFxcRYAsgsoLAq4BFJGsBeYamrAMWci6CWGN1mUExmxtkEsZdJWegZwq6nQM1GrGcBKYtjNoFQATBQGRUAxviMN8UGai9IAoAoABBQVcSLAVqVlYDQSKBFNUBcSNASjOtaCWJWrWaDItqSgliVrWaCalVAZqNJQZABBUARQEb4Yb4Bii1IAoAAAqpFBSADUpqNAsajJoN6JKA1DSVQAwtBKIArNWoDJolBLUWoAlS0BANBBUARUAdOHN04BiotSgauoAoALKaigoRQWVqMRYDSxlQVpNAWnlJTQWVWTQF1EBb0VKAlTVZBUolBEWgIUKCaCAAANc1lvkGKFQFABRFBUAFisroK1KzKA1qsroLKsQBpE1dAVAFGdLQW0RAVE08oF1nRADQBAAQAAABvhhrgGai0BFRQAAUABUUDFQBo1NIDQyugpqAKrKgCKCGlQAwAQDQNRUARSggACKANcMtcgzUUBFAAUBFAAAFEAVQA0AAAFQAAAEoAGgAgAAA9m/cf8ACHX7R4GeGvhfInV6k5ng73c5t52/amemV5DzfX3i/Bv6wA83194vwfnY/sC/7+vVv4P55n380AWeL++8devPwb7Pb9/1fmTxf3ZP6i+m2b/Juej237YAeb++8X4PzuvHi7uf5M/74L5wEf/Z")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My Lists</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `dfghjfghjkfdggggggghhhhhhhhhhhhhhhhhhhhhhhhhhd
            hhhhhhhhhhhhhhhfffffdfvsnjsdnfsdddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddasnsadfbasdf
            ad;sbdas;dbsbdasasdbasdddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddsdkfsdjkf`,
            150
          )}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;
