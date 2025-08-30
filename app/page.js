import ButtonLogin from '@/components/ButtonLogin';

export default function Home() {
  const isLoggedIn = true;
  const name = 'Rick';
  return (
    <main>
      <section className='text-center px-8 py-32 max-w-3xl mx-auto'>
        <h1 className='text-5xl font-extrabold mb-6'>Collect customer feedback to build better products</h1>
        <div className='opacity-90 mb-10'>Create a feedback board in minutes, prioritize features, and build products your customers will love.</div>
        <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
      </section>
    </main>
  );
}
