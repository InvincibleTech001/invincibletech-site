import Container from "@/components/shared/Container";

export default function Home() {
  return (
    <main>
      <Container>
        <h1 className="text-6xl font-bold mt-24">
          Welcome to InvincibleTech
        </h1>

        <p className="text-slate-400 mt-6 max-w-2xl text-lg">
          Software Engineering, Data Intelligence and Artificial Intelligence
          Solutions for modern organizations.
        </p>
      </Container>
    </main>
  );
}