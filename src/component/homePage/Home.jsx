import InspectionButton from "./InspectionButton";
import Header from "./Header";
import { Navigate, Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="bg-dark-green w-full h-screen">
      <Header />
      <section className="bg-cream w-full h-[60%] flex justify-center items-center px-[50px] text-gray-500">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          reiciendis soluta exercitationem quidem ipsam modi, facere, aperiam
          placeat excepturi, quia temporibus distinctio quas non suscipit culpa
          aliquid perferendis aut ex perspiciatis quis numquam cupiditate. Autem
          facilis, nobis ut libero consequatur labore aperiam provident iste
          atque eaque laudantium sunt quidem ad est inventore sapiente, iure
          quasi aut quos veniam! Perspiciatis ea at obcaecati exercitationem
          iure harum nemo libero, eveniet quos quo perferendis? Amet ipsa est
          officiis reprehenderit. Ratione nam officiis labore esse tenetur iste
          deserunt numquam. Nisi sunt eveniet quidem dolores consequatur sed est
          doloremque ad obcaecati. Molestias at incidunt similique!
        </p>
      </section>
      <footer className="bg-dark-green w-full h-[20%] flex justify-end items-center px-[50px]">
        <Link to="/categories">
          <InspectionButton />
        </Link>
      </footer>
    </div>
  );
};
export default Home;

// parent component -  App.js
