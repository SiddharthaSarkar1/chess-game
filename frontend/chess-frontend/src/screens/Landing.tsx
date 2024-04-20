import { NavigateFunction, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export const Landing = () => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <>
      <div className="flex justify-center">
        <div className="pt-8 max-w-screen-md">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex justify-center">
              <img
                src={"/chessboard.jpeg"}
                className="max-w-96"
                alt="Chess Board"
              />
            </div>
            <div className="pt-16">
              <div className="flex justify-center">
                <h1 className="text-4xl font-bold text-white">
                  Play chess online on our site
                </h1>
              </div>

              <div className="mt-8 flex justify-center">
                <Button
                  onClick={() => navigate("/game")}
                >
                  Play Online
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
