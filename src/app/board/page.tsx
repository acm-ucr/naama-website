import Title from "@/components/Title";
import BoardCard from "@/components/BoardCard";
import Alexis from "../../../public/board/Alexis_Battikha.webp";
import Raymon from "../../../public/board/Raymon_Marcos.webp";
import Joelle from "../../../public/board/Joelle_Nana.webp";
import Shams from "../../../public/board/Shams_Alsammarraie.webp";
import Ranya from "../../../public/board/Ranya_Butrus.webp";
import Mariam from "../../../public/board/Mariam_Abbas.webp";

const Board = () => {
  return (
    <div className="w-screenitems-center h-screen justify-center">
      <div className="flex grid grid-cols-3 grid-rows-2 justify-evenly gap-15 px-10">
        <BoardCard
          image={Raymon}
          name="Raymon Marcos"
          title="Founder and President"
          yearMajor="3rd Year Global and Community Health Major"
          description="Raymon Marcos is an Iraqi Chaldean originally from San Diego, where he also works as an EMT on the weekends. Between shifts and classes, he stays busy balancing pre-med life while making time to hang out with friends. Whether studying, working, or unwinding, he is always looking for ways to create a strong NAAMA community at UCR."
        />
        <BoardCard
          image={Joelle}
          name="Joelle Nana"
          title="Vice President"
          yearMajor="3rd Year Biology Major"
          description="Joelle Nana is a Syrian American from Los Angeles with a strong interest in healthcare. Through shadowing and volunteering, she gains valuable experience in the field. Despite a busy class schedule, she makes time for shopping, TV shows, and relaxing walks. She is also dedicated to making NAAMA an outstanding medical club."
        />
        <BoardCard
          image={Shams}
          name="Shams"
          title="Secretary"
          yearMajor="2nd Year Biology Major"
          description="Shams Alsammarraie is from Iraq and lived there until she was 9 years old. She enjoys meeting new people and connecting with fellow Iraqis. When she's not on campus or with friends, she's usually with her family, dog, or in the Bay Area. She loves being part of NAAMA for its friendly, welcoming community and the fun experiences it offers."
        />
        <BoardCard
          image={Alexis}
          name="Alexis Battikha"
          title="Treasurer"
          yearMajor="3rd Year Neuroscience Major"
          description="Alexis Battikha grew up in San Diego and is originally Palestinian. Between a busy school and work schedule, she enjoys trying new restaurants, shopping, and spending time with family. She loves being part of a strong Arab community that supports the next generation of healthcare providers and is excited to contribute to NAAMA's growth."
        />
        <BoardCard
          image={Ranya}
          name="Ranya Butrus"
          title="Public Relations Director"
          yearMajor="2nd Year Psychology Major"
          description="Ranya Butrus is an Iraqi Chaldean and is grateful for the opportunity NAAMA has given her to connect with like-minded individuals, learn more about the medical field, and contribute to a supportive community. She’s excited to help grow the club and share all the amazing opportunities it offers."
        />
        <BoardCard
          image={Mariam}
          name="Mariam Abbas"
          title="Event Coordinator"
          yearMajor="2nd Year Biology Major"
          description="Mariam Abbas, the Event Coordinator for NAAMA, is originally from Baghdad, Iraq, and now lives in Anaheim with her family. On the pre-med track, she balances her studies while pursuing her passion for healthcare. She enjoys connecting with people through school projects, spending time with friends, and meeting new people on campus."
        />
      </div>
    </div>
  );
};

export default Board;
