import Banner from "../components/Banner";
import Game from "../components/Game";
import Media from "../components/Media";
import Section1 from "../section/Section1";
import Section2 from "../section/Section2";
import Section3 from "../section/Section3";
import Section4 from "../section/Section4";
import Section5 from "../section/Section5";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Game></Game>
           <Media></Media>
           <Section1></Section1>
           <Section2></Section2>
           <Section3></Section3>
           <Section4></Section4>
           <Section5></Section5>
        </div>
    );
};

export default Home;