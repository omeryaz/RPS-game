import Button from "./Button";

const btnArr: string[] = ["rock", "paper", "scissors"];

function ButtonContainer() {
  return (
    <section className="game-btn-container">
      {btnArr.map((type: string) => (
        <Button type={type} />
      ))}
    </section>
  );
}

export default ButtonContainer;
